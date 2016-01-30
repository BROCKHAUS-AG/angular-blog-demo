import IHttpService = angular.IHttpService;
import OnActivate = angular.OnActivate;
import IScope = angular.IScope;
import {BlogComponent} from "./interfaces";

export class CommentListCtrl {
    postId: string;
    comments: Array<any>;

    constructor(private $scope: IScope, private $http: IHttpService) {
        /*
         * XXX
         */
        if (this.postId) {
            this.$http.get(`http://jsonplaceholder.typicode.com/posts/${this.postId}/comments`).then(res => {
                this.comments = res.data;
            });
        }
    }
}

export const CommentList: BlogComponent = {
    name: 'commentList',
    controller: CommentListCtrl,
    bindings: {
      postId: '@'
    },
    template: `
        <h3>Comments</h3>
        <section>
            <div ng-repeat="comment in $ctrl.comments">
            <h4>{{::comment.name}} <small><{{::comment.email}}></small></h4>
            <p>{{::comment.body}}</p>
            </div>
        </section>
    `
};