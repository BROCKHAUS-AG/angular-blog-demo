const blogDemo = angular.module('angularBlogDemo', ['ngComponentRouter']);

import {Blog} from './blog';
blogDemo.component(Blog.name, Blog);
blogDemo.value('$routerRootComponent', Blog.name);

import {PostList} from './postList';
blogDemo.component(PostList.name, PostList);

import {PostSummary} from './postSummary';
blogDemo.component(PostSummary.name, PostSummary);

import {PostDetails} from './postDetails';
blogDemo.component(PostDetails.name, PostDetails);

import {CommentList} from './commentList';
blogDemo.component(CommentList.name, CommentList);

import {About} from './about';
blogDemo.component(About.name, About);

angular.bootstrap(document, [blogDemo.name]);