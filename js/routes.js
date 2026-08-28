const routes = [

    {
        from: "Chennai",
        to: "Mumbai",
        distance: 1330
    },

    {
        from: "Chennai",
        to: "Bengaluru",
        distance: 350
    },

    {
        from: "Chennai",
        to: "Delhi",
        distance: 2175
    },

    {
        from: "Delhi",
        to: "Mumbai",
        distance: 1385
    },

    {
        from: "Hyderabad",
        to: "Surat",
        distance: 1000
    },

    {
        from: "Madurai",
        to: "Patna",
        distance: 2200
    },

    {
        from: "Kochi",
        to: "Kolkata",
        distance: 2300
    }

];


function displayRoutes() {

    let routeList =
        document.getElementById(
            "routeList"
        );


    routes.forEach(
        function(route, index) {


            let card =
                document.createElement(
                    "div"
                );


            card.className =
                "route-card";


            card.innerHTML = `

                <h3>
                    ${route.from}
                    →
                    ${route.to}
                </h3>

                <p>
                    Distance:
                    <strong>
                        ${route.distance} km
                    </strong>
                </p>

                <p>
                    Rate:
                    ₹4.67/km
                </p>

                <button
                    onclick="selectRoute(${index})">

                    Select Route

                </button>

            `;


            routeList.appendChild(card);

        }
    );

}


function selectRoute(index) {

    localStorage.setItem(

        "selectedRoute",

        JSON.stringify(
            routes[index]
        )

    );


    window.location.href =
        "booking.html";

}


function logout() {

    localStorage.clear();

    window.location.href =
        "index.html";

}


displayRoutes();
