// @ts-nocheck
import React, { useState } from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { deletePost } from "../../services/index/posts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { postActions } from "../../store/reducers/post";

const ConfModal = ({
  cancelConf,
  setCancelConf,
  index,
  postSlug,
  deletePostMutate,
}) => {
  const handleDeletePost = () => {
    deletePostMutate(postSlug);
  };

  return (
    <div
      className={`${
        cancelConf === index ? "block" : "hidden"
      } bg-red-50 w-full h-full absolute flex items-center justify-center gap-2`}
    >
      <span className="text-green-500 cursor-pointer hover:bg-green-300 rounded-md p-2">
        <AiOutlineCheck onClick={handleDeletePost} />
      </span>
      <span
        onClick={() => setCancelConf(null)}
        className="text-red-500 cursor-pointer hover:bg-red-300 rounded-md p-1"
      >
        <IoIosClose size={20} />
      </span>
    </div>
  );
};

const ManagePosts = ({ posts, isLoading }) => {
  const dispatch = useDispatch();
  const [cancelConf, setCancelConf] = useState(null);

  const queryClient = useQueryClient();
  const { mutate: deletePostMutate } = useMutation({
    mutationFn: (slug) => deletePost({ slug: slug }),
    onSuccess: (message) => {
      toast.success(message.message);
      queryClient.invalidateQueries(["profile", posts]);
      setCancelConf(null);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const slug = ""
  const { data } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    queryKey: ["articles", slug],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleUpdatePost = () => {
    dispatch(postActions.setPostInfo(data));
    navigate("/editor");
  };

  return (
    <div className="w-full lg:flex-1 overflow-hidden mt-6 lg:mt-0">
      <h1 className="text-2xl font-semibold mx-4 lg:text-start text-center">
        Manage Posts
      </h1>
      <div className="w-full px-4 mx-auto">
        <div className="py-8">
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table
                className={`min-w-full leading-normal relative min-h-[200px]`}
              >
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Created at
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Tags
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr className="absolute top-16 left-[50%] translate-x-[-50%]">
                      <td className="w-full">
                        <img
                          className="w-28 h-28"
                          src="/Infinity-loader.svg"
                          alt=""
                        />
                      </td>
                    </tr>
                  ) : posts.length === 0 ? (
                    <tr className="absolute top-24 left-[50%] translate-x-[-50%]">
                      <td className="w-full text-center text-lg font-semibold">
                        You Haven't uploaded any blog
                      </td>
                    </tr>
                  ) : (
                    posts?.map((post, index) => (
                      <tr key={index}>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <Link
                                to={`/articles/${post?.slug}`}
                                className="relative block"
                              >
                                <img
                                  src={
                                    post?.photo
                                      ? post?.photo
                                      : images.samplePostImage
                                  }
                                  alt={post.title}
                                  className="transition-opacity duration-150 hover:opacity-70 mx-auto object-cover rounded-lg w-10 aspect-square"
                                />
                              </Link>
                            </div>
                            <div className="ml-3">
                              <Link to={`/articles/${post?.slug}`}>
                                <p className="text-gray-900 truncate max-w-[200px] hover:text-blue-400 transition-colors duration-150">
                                  {post.title}
                                </p>
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {post?.categories.length > 0
                              ? post.categories[0]
                              : "Uncategorized"}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {new Date(post.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </p>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="flex gap-x-2">
                            {post.tags.length > 0
                              ? post.tags.map((tag, index) => (
                                  <p key={index}>
                                    {tag}
                                    {post.tags.length - 1 !== index && ","}
                                  </p>
                                ))
                              : "No tags"}
                          </div>
                        </td>
                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div className="relative flex items-center gap-2">
                            <span className="text-black cursor-pointer hover:bg-blue-400 rounded-full p-2">
                              <FaPen onClick={handleUpdatePost}/>
                            </span>
                            <span className="text-red-500 cursor-pointer hover:bg-red-300 rounded-full p-2">
                              <AiOutlineDelete
                                onClick={() => setCancelConf(post?._id)}
                              />
                            </span>
                            <ConfModal
                              setCancelConf={setCancelConf}
                              cancelConf={cancelConf}
                              index={post?._id}
                              postSlug={post?.slug}
                              deletePostMutate={deletePostMutate}
                            />
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePosts;
