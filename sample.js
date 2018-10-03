function execute()
{
    var data = [
        {
            icon: "/Icons/person01.jpg",
            action: "segment 01"
        },
        {
            icon: "/Icons/person02.jpg",
            action: "segment 02"
        },
        {
            icon: "/Icons/person03.jpg",
            action: "segment 03"
        },
        {
            icon: "/Icons/person04.jpg",
            action: "segment 04"
        },
        {
            icon: "/Icons/person05.jpg",
            action: "segment 05"
        },
        {
            icon: "/Icons/person06.jpg",
            action: "segment 06"
        },
        {
            icon: "/Icons/person07.jpg",
            action: "segment 07"
        },
        {
            icon: "/Icons/person08.jpg",
            action: "segment 08"
        },
        {
            icon: "/Icons/person09.jpg",
            action: "segment 09"
        },
        {
            icon: "/Icons/person10.jpg",
            action: "segment 10"
        },
        {
            icon: "/Icons/person11.jpg",
            action: "segment 11"
        },
        {
            icon: "/Icons/person12.jpg",
            action: "segment 12"
        },
        {
            icon: "/Icons/person13.jpg",
            action: "segment 13"
        },
        {
            icon: "/Icons/person14.jpg",
            action: "segment 14"
        },
        {
            icon: "/Icons/person15.jpg",
            action: "segment 15"
        },
        {
            icon: "/Icons/person16.jpg",
            action: "segment 16"
        },
        {
            icon: "/Icons/person17.jpg",
            action: "segment 17"
        },
        {
            icon: "/Icons/person18.jpg",
            action: "segment 18"
        },
        {
            icon: "/Icons/person19.jpg",
            action: "segment 19"
        }
    ];

    // Show menu launch
    var m = new d3.radialMenu().radius(250)
        .thickness(100)
        .appendTo("#menu-holder")
        .show(data);
};

// Fire straight away
setTimeout(function (d)
{
    execute();
}, 1000);
