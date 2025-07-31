"use client";
import { formatPostDate } from "@/lib/utils";
import { Post } from "@/sample/posts";
import { Avatar } from "@radix-ui/react-avatar";
import {
  ArrowBigDown,
  ArrowBigUp,
  Bookmark,
  LucideEye,
  LucideMessageSquareShare,
  MessageCircleMore,
  MoreHorizontalIcon,
  Plus,
  Share2,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const { title, content, images, tags, createdAt, authorId } = post;
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div className="flex flex-col p-4 rounded-lg shadow-md max-w-3xl">
      {/* Post Header */}
      <div className="flex items-center justify-between space-x-2 mb-4">
        {/* Name & Date */}
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage
              src={authorId.avatar}
              width={30}
              height={30}
              className="w-10 h-10 rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-md font-semibold">
              {authorId.last_name} {authorId.first_name}
              <span className="text-gray-500 ml-2">
                {formatPostDate(createdAt)}
              </span>
            </p>
            <span className="text-gray-500 text-xs">@{authorId.username}</span>
          </div>
        </div>
        {/* Follow & More */}
        <div className="flex items-center space-x-1">
          <Button variant="default" size="sm">
            Follow
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <MoreHorizontalIcon className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      </div>
      {/* Post Content */}
      <div>
        <h2
          className="text-lg font-semibold line-clamp-2"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </h2>
        {/* Content: max 3 lines, see more/collapse */}
        <div className="relative text-muted-foreground">
          <p
            className={showFullContent ? "mt-2 " : "mt-2 line-clamp-3"}
            style={
              showFullContent
                ? {}
                : {
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }
            }
          >
            {content}
          </p>
          {content.split("\n").length > 3 || content.length > 180 ? (
            <button
              className="text-sm text-blue-600 hover:underline mt-1"
              onClick={() => setShowFullContent((v) => !v)}
            >
              {showFullContent ? "See less" : "See more"}
            </button>
          ) : null}
        </div>
        {tags && tags.length > 0 && (
          <div className="mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block text-purple-500 py-1 text-sm font-medium mr-3 hover:text-purple-800 hover:underline hover:cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        {images && images.length > 0 && (
          <div className="mt-4">
            {images.length === 1 && (
              <Image
                key={images[0]}
                src={images[0]}
                alt="Post image"
                className="w-full rounded-lg"
                width={500}
                height={300}
              />
            )}

            {images.length === 2 && (
              <div className="flex gap-2">
                <Image
                  key={images[0]}
                  src={images[0]}
                  alt="Post image"
                  className="w-1/2 rounded-lg object-cover"
                  width={250}
                  height={300}
                />
                <Image
                  key={images[1]}
                  src={images[1]}
                  alt="Post image"
                  className="w-1/2 rounded-lg object-cover"
                  width={250}
                  height={300}
                />
              </div>
            )}

            {images.length === 3 && (
              <div className="flex gap-2 h-72">
                <Image
                  key={images[0]}
                  src={images[0]}
                  alt="Post image"
                  className="w-1/2 h-full rounded-lg object-cover"
                  width={250}
                  height={300}
                />
                <div className="flex flex-col w-1/2 gap-2">
                  <Image
                    key={images[1]}
                    src={images[1]}
                    alt="Post image"
                    className="w-full h-1/2 rounded-lg object-cover"
                    width={250}
                    height={145}
                  />
                  <Image
                    key={images[2]}
                    src={images[2]}
                    alt="Post image"
                    className="w-full h-1/2 rounded-lg object-cover"
                    width={250}
                    height={145}
                  />
                </div>
              </div>
            )}

            {(images.length === 4 || images.length > 4) && (
              <div className="flex gap-2 h-72">
                <div className="flex flex-col w-1/2 gap-2">
                  <Image
                    key={images[0]}
                    src={images[0]}
                    alt="Post image"
                    className="w-full h-1/2 rounded-lg object-cover"
                    width={250}
                    height={145}
                  />
                  <Image
                    key={images[1]}
                    src={images[1]}
                    alt="Post image"
                    className="w-full h-1/2 rounded-lg object-cover"
                    width={250}
                    height={145}
                  />
                </div>
                <div className="flex flex-col w-1/2 gap-2 relative">
                  <Image
                    key={images[2]}
                    src={images[2]}
                    alt="Post image"
                    className="w-full h-1/2 rounded-lg object-cover"
                    width={250}
                    height={145}
                  />
                  <div className="w-full h-1/2 relative">
                    <Image
                      key={images[3]}
                      src={images[3]}
                      alt="Post image"
                      className="w-full h-full rounded-lg object-cover"
                      width={250}
                      height={145}
                    />
                    {images.length > 4 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg">
                        <span className="text-white text-2xl font-bold">
                          +{images.length - 4}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="rounded-full">
              <ArrowBigUp className="h-4 w-4" />
              137
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <ArrowBigDown className="h-4 w-4" />
              260
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <MessageCircleMore className="h-4 w-4" />
              12
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <LucideMessageSquareShare className="h-4 w-4" />
              309
            </Button>
          </div>
          <div className=" flex items-center space-x-2">
            <div className="flex items-center text-gray-500">
              200,378
              <LucideEye className="h-4 w-4 ml-2" />
            </div>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
