import IComponentOptions = angular.IComponentOptions;
import IHttpService = angular.IHttpService;
import OnActivate = angular.OnActivate;
import ComponentInstruction = angular.ComponentInstruction;
import {BlogComponent} from "./interfaces";

export interface PostDetailsComponentInstruction extends ComponentInstruction {
    params: { id: string };
}

export class PostDetailsCtrl implements OnActivate{
    post: any;

    constructor(private $http: IHttpService) {
    }

    $routerOnActivate(next: PostDetailsComponentInstruction ) {
        return this.$http.get(`http://jsonplaceholder.typicode.com/posts/${next.params.id}`).then(res => {
            this.post = res.data;
        });
    }
}

export const PostDetails: BlogComponent = {
    name: 'postDetails',
    controller: PostDetailsCtrl,
    template: `
        <section>
            <h3>{{::$ctrl.post.title}}</h3>
            <p>{{::$ctrl.post.body}}</p>
        </section>
        <comment-list ng-if="$ctrl.post" post-id="{{::$ctrl.post.id}}"></comment-list>
    `
};