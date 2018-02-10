function solve(arrStr) {
    let appRgx = /\$app='([^']+)'/;
    let controllerRgx = /\$controller='([^']+)'\&app='([^']+)'/;
    let modelRgx = /\$model='([^']+)'\&app='([^']+)'/;
    let viewRgx = /\$view='([^']+)'\&app='([^']+)'/;

    //app :obj controlers[] models[] views[]
    let modules = {};

    //app []
    let controllers = {};

    //app []
    let models = {};

    //app []
    let views = {};

    for (let line of arrStr) {
        if (appRgx.test(line)) {
            let app = appRgx.exec(line)[1];
            modules[app] = {};

        }

        if (controllerRgx.test(line)) {
            let app = controllerRgx.exec(line)[2];
            let cnt = controllerRgx.exec(line)[1];
            if (!controllers[app]) {
                controllers[app] = [];
            }
            controllers[app].push(cnt);

        }
        if (modelRgx.test(line)) {
            let app = modelRgx.exec(line)[2];
            let model = modelRgx.exec(line)[1];

            if (!models[app]) {
                models[app] = [];
            }
            models[app].push(model);

        }
        if (viewRgx.test(line)) {
            let app = viewRgx.exec(line)[2];
            let view = viewRgx.exec(line)[1];

            if (!views[app]) {
                views[app] = [];
            }
            views[app].push(view);

        }
    }

    for (let app of Object.keys(modules)) {
        let ctrls = controllers[app] != undefined ? controllers[app].sort((a, b) => a.localeCompare(b)) : [];
        let mdls = models[app] != undefined ? models[app].sort((a, b) => a.localeCompare(b)) : [];
        let vs = views[app] != undefined ? views[app].sort((a, b) => a.localeCompare(b)) : [];

        modules[app] = {
            controllers: ctrls,
            models: mdls,
            views: vs
        };
    }

    let sorted = sortObject(modules);

    console.log(JSON.stringify(sorted));


    function myCompare(a, b) {
        if (modules[a]['controllers'].length != modules[b]['controllers'].length) {
            return modules[b]['controllers'].length - modules[a]['controllers'].length;
        }
        return modules[a]['models'].length - modules[b]['models'].length;
    }

    function sortObject(obj) {
        return Object.keys(obj).sort((a, b) => myCompare(a, b)).reduce(function (result, key) {
            result[key] = obj[key];
            return result;
        }, {});
}
};

solve([
    "$controller='PHPController'&app='Language Parser'",
    "$controller='JavaController'&app='Language Parser'",
    "$controller='C#Controller'&app='Language Parser'",
    "$controller='C++Controller'&app='Language Parser'",
    "$app='Garbage Collector'",
    "$controller='GarbageController'&app='Garbage Collector'",
    "$controller='SpamController'&app='Garbage Collector'",
    "$app='Language Parser'"

]);