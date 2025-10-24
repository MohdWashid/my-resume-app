import React from 'react';
import AnimatedSection from '../../../AnimatedSection';
import { getBlogIcon } from '../../../utils/iconUtils';

const Blog = ({ theme, blogPosts }) => (
    <AnimatedSection
        title="Blog"
        content={
            blogPosts && blogPosts.length > 0 ? (
                <div className="space-y-6">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${theme === 'dark'
                                ? 'bg-gray-800 hover:bg-gray-700'
                                : 'bg-gray-800 hover:bg-gray-600'
                                }`}
                        >
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="mb-4">{post.excerpt}</p>
                            <a
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center text-blue-400 hover:underline transition-all duration-300 ${theme === 'dark'
                                    ? 'text-blue-400 hover:text-blue-300'
                                    : 'text-blue-600 hover:text-blue-500'
                                    }`}
                            >
                                {getBlogIcon(post.icon)} Read More
                            </a>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="p-6 rounded-lg shadow-lg text-center bg-gray-200 dark:bg-gray-800">
                    <h3 className="text-xl font-semibold mb-2">No Blog Posts Available</h3>
                    <p className="mb-4">It looks like there are no blog posts at the moment. Check back later for updates!</p>
                </div>
            )
        }
    />
);

export default Blog;


