import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from "@angular/router";


/**
 * Updates route titles
 * this is available all the time on load  (providedIn: root)
 * used in app.config.ts
 * 
 */
@Injectable({
    providedIn: 'root'
})
export class PageTitleStrategy extends TitleStrategy {

    public constructor(private readonly title: Title) {
        super()
    }

    // override buildTitle(snapshot: RouterStateSnapshot): string | undefined { }
    // override getResolvedTitleForRoute(snapshot: ActivatedRouteSnapshot) {  }
    override updateTitle(snapshot: RouterStateSnapshot): void {
        const title = this.buildTitle(snapshot);
        if (!!title) {
            this.title.setTitle(`Xian | ${title}`)
        }
    }
}