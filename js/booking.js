let selectedRoute =
    JSON.parse(
        localStorage.getItem(
            "selectedRoute"
        )
    );


const RATE = 4.67;



function loadRoute() {

    if (!selectedRoute) {

        window.location.href =
            "routes.html";

        return;
    }


    document.getElementById(
        "routeDetails"
    ).innerHTML = `

        <div class="route-info">

            <h3>
                ${selectedRoute.from}
                →
                ${selectedRoute.to}
            </h3>

            <p>
                Distance:
                ${selectedRoute.distance} km
            </p>

        </div>

    `;


    document.getElementById(
        "distance"
    ).innerHTML =
        selectedRoute.distance;


    calculateFare();

}



function calculateFare() {

    let count =
        parseInt(
            document.getElementById(
                "ticketCount"
            ).value
        );


    if (count < 1 ||
        isNaN(count)) {

        count = 1;

    }


    let pricePerTicket =
        selectedRoute.distance *
        RATE;


    let total =
        pricePerTicket *
        count;


    document.getElementById(
        "pricePerTicket"
    ).innerHTML =
        pricePerTicket.toFixed(2);


    document.getElementById(
        "totalAmount"
    ).innerHTML =
        total.toFixed(2);

}



function makePayment() {

    let passengerName =
        document.getElementById(
            "passengerName"
        ).value.trim();


    let upiId =
        document.getElementById(
            "upiId"
        ).value.trim();


    let count =
        parseInt(
            document.getElementById(
                "ticketCount"
            ).value
        );


    let message =
        document.getElementById(
            "paymentMessage"
        );


    if (passengerName === "") {

        message.innerHTML =
            "Please enter passenger name.";

        message.style.color = "red";

        return;

    }


    if (upiId === "") {

        message.innerHTML =
            "Please enter UPI ID.";

        message.style.color = "red";

        return;

    }


    if (!upiId.includes("@")) {

        message.innerHTML =
            "Please enter a valid UPI ID.";

        message.style.color = "red";

        return;

    }


    let pricePerTicket =
        selectedRoute.distance *
        RATE;


    let total =
        pricePerTicket *
        count;


    let ticketId =
        "INR" +
        Math.floor(
            100000 +
            Math.random() * 900000
        );


    let ticketData = {

        ticketId:
            ticketId,

        passenger:
            passengerName,

        from:
            selectedRoute.from,

        to:
            selectedRoute.to,

        distance:
            selectedRoute.distance,

        count:
            count,

        pricePerTicket:
            pricePerTicket.toFixed(2),

        total:
            total.toFixed(2)

    };


    localStorage.setItem(

        "ticketData",

        JSON.stringify(
            ticketData
        )

    );


    message.innerHTML =
        "Payment Successful! ✓";

    message.style.color =
        "green";


    setTimeout(function() {

        window.location.href =
            "ticket.html";

    }, 1000);

}



function logout() {

    localStorage.clear();

    window.location.href =
        "index.html";

}



loadRoute();
