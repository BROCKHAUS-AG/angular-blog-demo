import IComponentOptions = angular.IComponentOptions;
import {BlogComponent} from "./interfaces";

export class PostSummaryCtrl {
    post: any;
}

export const PostSummary: BlogComponent = {
    name: 'postSummary',
    controller: PostSummaryCtrl,
    bindings: {
      post: '='
    },
    template: `
        <section>
            <h3>{{::$ctrl.post.title}}</h3>
            <p>
                {{::$ctrl.post.body | limitTo: 40}}...
                <a ng-link="['PostDetails', { id: $ctrl.post.id }]">more</a>
            </p>
        </section>
    `
};