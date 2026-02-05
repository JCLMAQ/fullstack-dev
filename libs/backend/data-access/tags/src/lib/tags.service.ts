import { Prisma, TagWithRelations } from '@db/prisma';
import { PrismaClientService } from '@db/prisma-client';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTagDto, TagTranslationDto, UpdateTagDto } from './dto/tag.dto';

const TAG_INCLUDE: Prisma.TagValueInclude = {
	tagCategories: true,
	tagTranslates: {
		include: {
			language: true,
		},
		orderBy: {
			languageId: 'asc',
		},
	},
	mainTag: true,
	SubTags: {
		include: {
			tagCategories: true,
			tagTranslates: true,
		},
		orderBy: {
			position: 'asc',
		},
	},
	Todos: true,
	Tasks: true,
	Groups: true,
	Posts: true,
	Files: true,
};

@Injectable()
export class TagsService {
	constructor(private readonly prisma: PrismaClientService) {}

	async listTags(args: Prisma.TagValueFindManyArgs): Promise<TagWithRelations[]> {
		return this.prisma.tagValue.findMany({
			...args,
			include: TAG_INCLUDE,
		});
	}

	async countTags(where: Prisma.TagValueWhereInput): Promise<number> {
		return this.prisma.tagValue.count({ where });
	}

	async getTagById(id: number, includeDeleted = false): Promise<TagWithRelations> {
		const tag = await this.prisma.tagValue.findUnique({
			where: { id },
			include: TAG_INCLUDE,
		});

		if (!tag) {
			throw new NotFoundException(`Tag ${id} introuvable`);
		}

		if (!includeDeleted && tag.isDeleted) {
			throw new NotFoundException(`Tag ${id} introuvable`);
		}

		return tag;
	}

	async createTag(payload: CreateTagDto): Promise<TagWithRelations> {
		const { translations, ...data } = payload;

		return this.prisma.tagValue.create({
			data: {
				...data,
				tagTranslates: translations?.length
					? {
							create: translations.map((translation) => ({ ...translation })),
						}
					: undefined,
			},
			include: TAG_INCLUDE,
		});
	}

	async updateTag(id: number, payload: UpdateTagDto): Promise<TagWithRelations> {
		await this.getTagById(id);

		const { translations, ...data } = payload;

		const tag = await this.prisma.tagValue.update({
			where: { id },
			data,
			include: TAG_INCLUDE,
		});

		if (translations !== undefined) {
			await this.replaceTranslations(id, translations);
			return this.getTagById(id, true);
		}

		return tag;
	}

	async softDeleteTag(id: number): Promise<TagWithRelations> {
		const tag = await this.getTagById(id, true);

		if (tag.isDeleted) {
			throw new BadRequestException(`Le tag ${id} est déjà supprimé`);
		}

		return this.prisma.tagValue.update({
			where: { id },
			data: {
				isDeleted: 1,
				isDeletedDT: new Date(),
			},
			include: TAG_INCLUDE,
		});
	}

	async restoreTag(id: number): Promise<TagWithRelations> {
		const tag = await this.getTagById(id, true);

		if (!tag.isDeleted) {
			throw new BadRequestException(`Le tag ${id} n'est pas supprimé`);
		}

		return this.prisma.tagValue.update({
			where: { id },
			data: {
				isDeleted: 0,
				isDeletedDT: null,
			},
			include: TAG_INCLUDE,
		});
	}

	async deleteTag(id: number): Promise<TagWithRelations> {
		await this.getTagById(id, true);
		return this.prisma.tagValue.delete({
			where: { id },
			include: TAG_INCLUDE,
		});
	}

	private async replaceTranslations(tagId: number, translations: TagTranslationDto[]): Promise<void> {
		const operations: Prisma.PrismaPromise<unknown>[] = [
			this.prisma.tagTranslate.deleteMany({ where: { tagId } }),
		];

		if (translations.length) {
			operations.push(
				this.prisma.tagTranslate.createMany({
					data: translations.map((translation) => ({
						...translation,
						tagId,
					})),
				})
			);
		}

		await this.prisma.$transaction(operations);
	}
}
