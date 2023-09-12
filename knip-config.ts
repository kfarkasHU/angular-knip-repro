import { KnipConfig } from "knip";

const config: KnipConfig = {
    ignoreDependencies: [
        // angular built-in dependencies
        "@angular/compiler-cli",
        "@angular-devkit/build-angular",
        // Testing libs coming with `ng new` command
        "@types/jasmine",
        "jasmine-core",
        "karma",
        "karma-chrome-launcher",
        "karma-coverage",
        "karma-jasmine",
        "karma-jasmine-html-reporter",

        // THESE ARE NOT FAKE WARNINGS!
        // but knip reports them in a newly created application
        "@angular/forms",       // this should be used directly in the angular application `ReactiveFormsModule`
        "@angular/router",      // this should be used directly in the angular application `RouterModule`
    ]
}

export default config;
