import IHttpService = angular.IHttpService;
import OnActivate = angular.OnActivate;
import {BlogComponent} from "./interfaces";

export class PostListCtrl implements OnActivate {
    limit = 10;
    posts: Array<any>;

    constructor(private $http: IHttpService) {
    }

    $routerOnActivate() {
        return this.$http.get(`http://jsonplaceholder.typicode.com/posts?_limit=${this.limit}`).then(res => {
            this.posts = res.data;
        });
    }

    static $canActivate() {
        console.log('PostListCtrl $canActivate');
        return true;
    }
}

export const PostList: BlogComponent = {
    name: 'postList',
    controller: PostListCtrl,
    $canActivate: PostListCtrl.$canActivate,
    template: `
        <h2>Posts</h2>
        <post-summary post="post" ng-repeat="post in $ctrl.posts">
        </post-summary>
    `
};