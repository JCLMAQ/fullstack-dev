import { Prisma, UserPostLikeLink } from '@db/prisma';
import { PrismaClientService } from '@db/prisma-client';
import { Injectable } from '@nestjs/common';

// Helper function for type-safe error handling
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

@Injectable()
export class PostLikesService {
  constructor(private readonly prisma: PrismaClientService) {}

  // Create a new post like (user likes a post)
  async create(data: Prisma.UserPostLikeLinkCreateInput): Promise<UserPostLikeLink> {
    try {
      return await this.prisma.userPostLikeLink.create({
        data,
        include: {
          user: true,
          post: true,
        },
      });
    } catch (error) {
      throw new Error(`Failed to create post like: ${getErrorMessage(error)}`);
    }
  }

  // Like a post (simplified method)
  async likePost(userId: string, postId: string): Promise<UserPostLikeLink> {
    try {
      return await this.create({
        user: { connect: { id: userId } },
        post: { connect: { id: postId } },
      });
    } catch (error) {
      throw new Error(`Failed to like post: ${getErrorMessage(error)}`);
    }
  }

  // Unlike a post (remove like)
  async unlikePost(userId: string, postId: string): Promise<UserPostLikeLink> {
    try {
      const existingLike = await this.findOne(userId, postId);
      if (!existingLike) {
        throw new Error('Like not found');
      }

      return await this.prisma.userPostLikeLink.delete({
        where: {
          user_id_post_id: {
            user_id: userId,
            post_id: postId,
          },
        },
        include: {
          user: true,
          post: true,
        },
      });
    } catch (error) {
      throw new Error(`Failed to unlike post: ${getErrorMessage(error)}`);
    }
  }

  // Find all post likes with optional filtering and pagination
  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserPostLikeLinkWhereUniqueInput;
    where?: Prisma.UserPostLikeLinkWhereInput;
    orderBy?: Prisma.UserPostLikeLinkOrderByWithRelationInput;
  }): Promise<UserPostLikeLink[]> {
    try {
      const { skip, take, cursor, where, orderBy } = params;
      return await this.prisma.userPostLikeLink.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy: orderBy || { createdAt: 'desc' },
        include: {
          user: true,
          post: true,
        },
      });
    } catch (error) {
      throw new Error(`Failed to fetch post likes: ${getErrorMessage(error)}`);
    }
  }

  // Find a specific post like by user and post IDs
  async findOne(userId: string, postId: string): Promise<UserPostLikeLink | null> {
    try {
      return await this.prisma.userPostLikeLink.findUnique({
        where: {
          user_id_post_id: {
            user_id: userId,
            post_id: postId,
          },
        },
        include: {
          user: true,
          post: true,
        },
      });
    } catch (error) {
      throw new Error(`Failed to fetch post like: ${getErrorMessage(error)}`);
    }
  }

  // Check if a user has liked a specific post
  async hasUserLikedPost(userId: string, postId: string): Promise<boolean> {
    try {
      const like = await this.findOne(userId, postId);
      return like !== null;
    } catch (error) {
      throw new Error(`Failed to check if user liked post: ${getErrorMessage(error)}`);
    }
  }

  // Get all likes for a specific post
  async findLikesByPost(postId: string): Promise<UserPostLikeLink[]> {
    try {
      return await this.findAll({
        where: { post_id: postId },
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      throw new Error(`Failed to fetch likes for post: ${getErrorMessage(error)}`);
    }
  }

  // Get all likes by a specific user
  async findLikesByUser(userId: string): Promise<UserPostLikeLink[]> {
    try {
      return await this.findAll({
        where: { user_id: userId },
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      throw new Error(`Failed to fetch likes by user: ${getErrorMessage(error)}`);
    }
  }

  // Count total likes for a specific post
  async countLikesForPost(postId: string): Promise<number> {
    try {
      return await this.prisma.userPostLikeLink.count({
        where: { post_id: postId },
      });
    } catch (error) {
      throw new Error(`Failed to count likes for post: ${getErrorMessage(error)}`);
    }
  }

  // Count total likes by a specific user
  async countLikesByUser(userId: string): Promise<number> {
    try {
      return await this.prisma.userPostLikeLink.count({
        where: { user_id: userId },
      });
    } catch (error) {
      throw new Error(`Failed to count likes by user: ${getErrorMessage(error)}`);
    }
  }

  // Get most liked posts (posts with most likes)
  async getMostLikedPosts(limit = 10): Promise<{ post_id: string; _count: number }[]> {
    try {
      const result = await this.prisma.userPostLikeLink.groupBy({
        by: ['post_id'],
        _count: {
          post_id: true,
        },
        orderBy: {
          _count: {
            post_id: 'desc',
          },
        },
        take: limit,
      });

      return result.map(item => ({
        post_id: item.post_id,
        _count: item._count.post_id,
      }));
    } catch (error) {
      throw new Error(`Failed to get most liked posts: ${getErrorMessage(error)}`);
    }
  }

  // Get most active users (users who like most posts)
  async getMostActiveUsers(limit = 10): Promise<{ user_id: string; _count: number }[]> {
    try {
      const result = await this.prisma.userPostLikeLink.groupBy({
        by: ['user_id'],
        _count: {
          user_id: true,
        },
        orderBy: {
          _count: {
            user_id: 'desc',
          },
        },
        take: limit,
      });

      return result.map(item => ({
        user_id: item.user_id,
        _count: item._count.user_id,
      }));
    } catch (error) {
      throw new Error(`Failed to get most active users: ${getErrorMessage(error)}`);
    }
  }

  // Get recent likes (latest likes across all posts)
  async getRecentLikes(limit = 20): Promise<UserPostLikeLink[]> {
    try {
      return await this.findAll({
        take: limit,
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      throw new Error(`Failed to get recent likes: ${getErrorMessage(error)}`);
    }
  }

  // Get likes for multiple posts
  async findLikesForPosts(postIds: string[]): Promise<UserPostLikeLink[]> {
    try {
      return await this.findAll({
        where: {
          post_id: {
            in: postIds,
          },
        },
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      throw new Error(`Failed to fetch likes for posts: ${getErrorMessage(error)}`);
    }
  }

  // Get likes by date range
  async findLikesByDateRange(startDate: Date, endDate: Date): Promise<UserPostLikeLink[]> {
    try {
      return await this.findAll({
        where: {
          createdAt: {
            gte: startDate,
            lte: endDate,
          },
        },
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      throw new Error(`Failed to fetch likes by date range: ${getErrorMessage(error)}`);
    }
  }

  // Toggle like (like if not liked, unlike if liked)
  async toggleLike(userId: string, postId: string): Promise<{ action: 'liked' | 'unliked'; like?: UserPostLikeLink }> {
    try {
      const existingLike = await this.findOne(userId, postId);

      if (existingLike) {
        await this.unlikePost(userId, postId);
        return { action: 'unliked' };
      } else {
        const newLike = await this.likePost(userId, postId);
        return { action: 'liked', like: newLike };
      }
    } catch (error) {
      throw new Error(`Failed to toggle like: ${getErrorMessage(error)}`);
    }
  }

  // Get like statistics for a post
  async getPostLikeStats(postId: string): Promise<{
    totalLikes: number;
    recentLikes: UserPostLikeLink[];
    topLikers: UserPostLikeLink[];
  }> {
    try {
      const [totalLikes, recentLikes, topLikers] = await Promise.all([
        this.countLikesForPost(postId),
        this.findAll({
          where: { post_id: postId },
          take: 5,
          orderBy: { createdAt: 'desc' },
        }),
        this.findAll({
          where: { post_id: postId },
          take: 10,
          orderBy: { createdAt: 'desc' },
        }),
      ]);

      return {
        totalLikes,
        recentLikes,
        topLikers,
      };
    } catch (error) {
      throw new Error(`Failed to get post like stats: ${getErrorMessage(error)}`);
    }
  }
}
