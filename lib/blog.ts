import {BlogComponent} from "./interfaces";
import {PostList} from "./postList";
import {About} from "./about";
import {PostDetails} from "./postDetails";

export class BlogCtrl {
}

export const Blog: BlogComponent = {
    name: 'blog',
    controller: BlogCtrl,
    $routeConfig: [
        { path: '/posts', name: 'PostList', component: PostList.name, useAsDefault: true },
        { path: '/posts/:id', name: 'PostDetails', component: PostDetails.name },
        { path: '/about', name: 'About', component: About.name },
    ],
    template: `
        <h1>BlogDemo App</h1>
        <nav>
            <a ng-link="['PostList']">Posts</a> |
            <a ng-link="['About']">About</a>
        </nav>
        <ng-outlet></ng-outlet>
    `
};