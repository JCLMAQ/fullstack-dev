import { PostsService } from '@be/posts';
import { UsersService } from '@be/users';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';


@Controller()
export class AppController {

  constructor(
    private readonly usersService: UsersService,
    private readonly postsService: PostsService,

  ) {}

  @Get('post/:id')
  async getPostById(@Param('id') id: string) {
    return this.postsService.post({ id: Number(id) });
  }


  @Get('filter/:searchString')
  async getFilteredPosts(@Param('searchString') searchString: string) {
    const posts = this.postsService.posts({
      where: {
        OR: [
          {
            title: {
              contains: searchString,
            },
          },
          {
            content: {
              contains: searchString,
            },
          },
        ],
      },
    });


    return Promise.all([posts]).then(([posts]) => [
      ...posts,

    ]);
  }

  @Post('post')
  async createdDraft(
    @Body() postData: { title: string; content?: string; authorEmail: string }
  ) {
    const { title, content, authorEmail } = postData;
    return this.postsService.createPost({
      title,
      content,
      author: {
        connect: { email: authorEmail },
      },
    });
  }

  @Post('user')
  async createUser(@Body() userData: { name?: string; email: string }) {
    const { name, email } = userData;
    return this.usersService.createUser({
      name,
      email,
    });
  }

  @Put('publish/:id')
  async publishPost(@Param('id') id: string) {
    return this.postsService.updatePost({
      where: { id: Number(id) },
      data: { published: true },
    });
  }


  @Delete('post/:id')
  async deletePost(@Param('id') id: string) {
    return this.postsService.deletePost({ id: Number(id) });
  }

}
