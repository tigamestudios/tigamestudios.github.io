function locate(obj) {
    const classToURLMap = {
        "m-w-w": "games/Merge-With-World",
        "w-n": "games/War-Numbers",
        "t-f-c": "games/The-Flying-Creates",
        "ti-studio": "docs#about-studio",
        "team": "docs#about-our-teams",
        "about-games": "docs#about-our-games",
        "support": "support"
    };

    const element = document.getElementById(obj.id);
    if (element) {
        const classList = element.classList;
        let url = null;
        for (const className of classList) {
            if (classToURLMap.hasOwnProperty(className)) {
                url = classToURLMap[className];
                break;
            }
        }

        if (url) {
            window.location.href = url;
        } else {
            console.log("ObjectError: No matching class found.");
        }
    } else {
        console.log("ObjectError: Element not found.");
    }
}
