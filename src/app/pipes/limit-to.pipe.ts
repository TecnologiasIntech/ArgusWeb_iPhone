import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

    transform(textComplete: any, limit: any): any {
        let textLimited: string = '';

        if (textComplete.length > limit) {
            for (let i = 0; i < limit; i++) {
                textLimited += textComplete[i];

            }
            textLimited += '...';
        } else {
            textLimited = textComplete;
        }

        return textLimited;
    }

}
