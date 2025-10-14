import { AddressModule } from '@be/address';
import { AppEmailDomainsModule } from '@be/appEmailDomains';
// import { AuthModule } from '@be/auth';
import { CategoriesModule } from '@be/categories';
import { CommentsModule } from '@be/comments';
import { ConfigParamsModule } from '@be/configParams';
// import { FilesModule } from '@be/files';
import { GroupsModule } from '@be/groups';
import { ImagesModule } from '@be/images';
import { OrganizationsModule } from '@be/organizations';
import { OrgDomainsModule } from '@be/orgDomains';
import { OrgEmailsModule } from '@be/orgEmails';
import { OrgEmailUseTosModule } from '@be/orgEmailUseTos';
import { PhonesModule } from '@be/phones';
import { PostLikesModule } from '@be/postLikes';
import { PostsModule } from '@be/posts';
import { ProfilesModule } from '@be/profiles';
import { StoriesModule } from '@be/stories';
import { TasksModule } from '@be/tasks';
import { TodosModule } from '@be/todos';
import { UserFollowersModule } from '@be/userFollowers';
import { UsersModule } from '@be/users';
import { PrismaClientModule } from '@db/prisma-client';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    PostsModule,
    UsersModule,
    CommentsModule,
    ImagesModule,
    AddressModule,
    UserFollowersModule,
    // AuthModule,
    PrismaClientModule,
    AppEmailDomainsModule,
    CategoriesModule,
    ConfigParamsModule,
    // FilesModule,
    GroupsModule,
    OrganizationsModule,
    OrgDomainsModule,
    OrgEmailsModule,
    OrgEmailUseTosModule,
    PhonesModule,
    PostLikesModule,
    ProfilesModule,
    StoriesModule,
    TasksModule,
    TodosModule,
    UserFollowersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
