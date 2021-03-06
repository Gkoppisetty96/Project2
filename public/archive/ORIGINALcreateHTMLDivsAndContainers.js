// Creating buttons
var path = window.location.pathname;
var page = path.split("/").pop();

var htmlBaseDivsCreater = () => {
    navBarCreater();
    $("<div>").attr({
        id: "everything-container",
    }).appendTo("body")
    $("<div>").attr({
        class: "row text-center",
    }).appendTo("#everything-container");
    containerForListOfTasksForLoopCreater();
    // buttonForTestingCreater();
    if (page === "index") {
        taskSummaryAndBreadCrumbCreater();
        newTaskButtonOnHTMLNoMySQLFunctionalityCreater();
        // buttonContainerDivForLoopCreater();
    } else if (page === "admin") {
        droppableFunctionality();
    }
    footerCreater();
};

var navBarCreater = () => {
    $("<nav>").attr({
        class: "navbar navbar-expand-lg navbar-dark bg-dark"
    }).appendTo("body");
    $("<a>Task Manager</a>").attr({
        class: "navbar-brand",
    }).appendTo(".navbar");
    $("<button>").attr({
        type: "button",
        class: "navbar-toggler",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
    }).appendTo(".navbar");
    $("<span>").attr({
        class: "navbar-toggler-icon"
    }).appendTo(".navbar-toggler");
    $("<div>").attr({
        id: "navbarSupportedContent",
        class: "collapse navbar-collapse",
    }).appendTo(".navbar");
    $("<ul>").attr({
        class: "navbar-nav mr-auto",
    }).appendTo("#navbarSupportedContent");
    $("<li>").attr({
        class: "nav-item active",
    }).appendTo(".navbar-nav");
    $("<a>Home</a>").attr({
        class: "nav-link",
        href: "index"
    }).appendTo(".nav-item");
    $("<span>").attr({
        class: "sr-only"
    }).appendTo(".nav-link")
    $("<li>").attr({
        id: "nav-item-admin",
        class: "nav-item",
    }).appendTo(".navbar-nav");
    $("<a>Admin</a>").attr({
        class: "nav-link active",
    }).appendTo("#nav-item-admin");
    // if (page === "admin") {
    //     $("<li>").attr({
    //         id: "nav-item-admin",
    //         class: "nav-item",
    //     }).appendTo(".navbar-nav");
    //     $("<a>Admin</a>").attr({
    //         class: "nav-link",
    //         href: "admin"
    //     }).appendTo("#nav-item-admin")
    //     $("<span>").attr({
    //         class: "sr-only"
    //     }).appendTo(".nav-link");
    // }
}

var containerForListOfTasksForLoopCreater = () => {
    var taskStatusArray = ["", "open", "closed"];
    for (var h = 1; h < taskStatusArray.length; h++) {
        $("<div>").attr({
            id: "container" + h + "Div",
            class: "col-sm-6",
        }).appendTo(".row");
        $("<div>").attr({
            id: "container" + h + "Card",
            class: "card",
        }).appendTo("#container" + h + "Div");
        if (taskStatusArray[h] === "open") {
            // console.log(taskStatusArray[h]);
            $("<div>").attr({
                class: "card-body " + taskStatusArray[h],
            }).appendTo("#container" + h + "Card");
            $("<h5>Pending Tasks</p>").attr({
                class: "card-title",
            }).appendTo("." + taskStatusArray[h]);
            $("<p>These tasks have been recieved</p>").attr({
                class: "card-text",
            }).appendTo("." + taskStatusArray[h]);
            $("<div>").attr({
                id: "container" + h,
                class: "panel-body box-container"
            }).appendTo("." + taskStatusArray[h]);
        } else if (taskStatusArray[h] === "closed") {
            // console.log(taskStatusArray[h]);
            $("<div>").attr({
                class: "card-body " + taskStatusArray[h],
            }).appendTo("#container" + h + "Card");
            $("<h5>Completed Tasks</p>").attr({
                class: "card-title",
            }).appendTo("." + taskStatusArray[h]);
            $("<p>These tasks have been resolved</p>").attr({
                class: "card-text",
            }).appendTo("." + taskStatusArray[h]);
            $("<div>").attr({
                id: "container2",
                class: "panel-body box-container"
            }).appendTo("." + taskStatusArray[h])
        }
    }
}

// var buttonForTestingCreater = () => {
//     for (var q = 1; q <= 8; q++) {
//         if (q <= 4) {
//             $("<div>Item " + [q] + "</div>").attr({
//                 itemid: "itm-" + [q],
//                 class: "btn btn-danger box-item",
//             }).appendTo("#container1")
//         } else {
//             $("<div>Item " + [q] + "</div>").attr({
//                 itemid: "itm-" + [q],
//                 class: "btn btn-danger box-item",
//             }).appendTo("#container2");
//         }
//     }
// }

var taskSummaryAndBreadCrumbCreater = () => {
    $("<div>").attr({
        itemid: "taskSummary",
        class: "text-center taskList",
    }).appendTo("#everything-container");
    $("<ol>").attr({
        class: "breadcrumb pagination-centered"
    }).appendTo(".taskList");
    $("<li>Create New Task Below</li>").attr({
        id: "zoneSummary",
        class: "breadcrumb-item active pagination-centered",
        "aria-current": "page",
    }).appendTo(".breadcrumb");
}

var newTaskButtonOnHTMLNoMySQLFunctionalityCreater = () => {
    $("<div>").attr({
        id: "newTaskDiv",
        class: "center btn-group dropright",
    }).appendTo("#everything-container");
    $("<button>New Task</button>").attr({
        type: "button",
        id: "newTask",
        class: "center btn btn-secondary dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
    }).appendTo("#newTaskDiv")
};

var buttonContainerDivForLoopCreater = () => {
    var divCreaterArray = ["zoneDrop", "departmentDrop", "roomDrop", "problemDrop", "severityDrop", "note"]
    for (var p = 0; p < divCreaterArray.length; p++) {
        $("<div>").attr({
            id: "buttonContainerContainer",
            class: "btn-group " + [p],
            // "x-placement": "right-start"
        }).appendTo("#everything-container");
        $("<div>").attr({
            // class: "",
            id: divCreaterArray[p]
        }).appendTo("." + [p])
    }
}

var footerCreater = () => {
    $("<footer>").appendTo("body");
    $("<span>Copyright &copy; 2019 | **github repo link goes here **</span>").attr({
        id: "footer-info"
    }).appendTo("footer")
}

var createButton = (value, area) => {
    if (!area) {
        area = "#roomDrop";
    }
    $('<input>').attr({
        type: 'button',
        id: value.toLowerCase(),
        value: value,
        // class: ""
    }).appendTo(area);
}

var createSeverityDropDownMenu = function () {
    for (var i = 1; i <= 5; i++) {
        $('<input>').attr({
            type: "button",
            id: i,
            value: i,
            class: "text-center"
        }).appendTo("#severityDrop")
    }
}