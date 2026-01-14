/*
  Warnings:

  - You are about to drop the `PostLike` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserFollower` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PostLike" DROP CONSTRAINT "PostLike_post_id_fkey";

-- DropForeignKey
ALTER TABLE "PostLike" DROP CONSTRAINT "PostLike_user_id_fkey";

-- DropForeignKey
ALTER TABLE "UserFollower" DROP CONSTRAINT "UserFollower_follower_id_fkey";

-- DropForeignKey
ALTER TABLE "UserFollower" DROP CONSTRAINT "UserFollower_user_id_fkey";

-- DropTable
DROP TABLE "PostLike";

-- DropTable
DROP TABLE "UserFollower";

-- CreateTable
CREATE TABLE "UserFollowerLink" (
    "user_id" TEXT NOT NULL,
    "follower_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserFollowerLink_pkey" PRIMARY KEY ("user_id","follower_id")
);

-- CreateTable
CREATE TABLE "UserPostLikeLink" (
    "user_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserPostLikeLink_pkey" PRIMARY KEY ("user_id","post_id")
);

-- AddForeignKey
ALTER TABLE "UserFollowerLink" ADD CONSTRAINT "UserFollowerLink_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFollowerLink" ADD CONSTRAINT "UserFollowerLink_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostLikeLink" ADD CONSTRAINT "UserPostLikeLink_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostLikeLink" ADD CONSTRAINT "UserPostLikeLink_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
