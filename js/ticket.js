let ticketData =
    JSON.parse(
        localStorage.getItem(
            "ticketData"
        )
    );



function loadTicket() {

    if (!ticketData) {

        window.location.href =
            "routes.html";

        return;

    }


    document.getElementById(
        "ticketId"
    ).innerHTML =
        ticketData.ticketId;


    document.getElementById(
        "passenger"
    ).innerHTML =
        ticketData.passenger;


    document.getElementById(
        "route"
    ).innerHTML =

        ticketData.from +
        " → " +
        ticketData.to;


    document.getElementById(
        "ticketDistance"
    ).innerHTML =
        ticketData.distance;


    document.getElementById(
        "count"
    ).innerHTML =
        ticketData.count;


    document.getElementById(
        "ticketPrice"
    ).innerHTML =
        ticketData.pricePerTicket;


    document.getElementById(
        "ticketTotal"
    ).innerHTML =
        ticketData.total;

}



function downloadTicket() {

    let ticketText = `

INDIA NATIONAL RAILWAY
E-TICKET

Ticket ID:
${ticketData.ticketId}

Passenger Name:
${ticketData.passenger}

Route:
${ticketData.from} → ${ticketData.to}

Distance:
${ticketData.distance} km

Number of Tickets:
${ticketData.count}

Price per Ticket:
₹${ticketData.pricePerTicket}

Total Amount:
₹${ticketData.total}

Payment:
UPI

Status:
BOOKING CONFIRMED

`;


    let blob =
        new Blob(
            [ticketText],
            {
                type:
                    "text/plain"
            }
        );


    let url =
        URL.createObjectURL(
            blob
        );


    let link =
        document.createElement(
            "a"
        );


    link.href = url;


    link.download =
        "Railway-Ticket-" +
        ticketData.ticketId +
        ".txt";


    link.click();


    URL.revokeObjectURL(url);

}



function shareTicket() {

    let shareText =

        "India National Railway Ticket\n\n" +

        "Ticket ID: " +
        ticketData.ticketId +
        "\n" +

        "Passenger: " +
        ticketData.passenger +
        "\n" +

        "Route: " +
        ticketData.from +
        " → " +
        ticketData.to +
        "\n" +

        "Tickets: " +
        ticketData.count +
        "\n" +

        "Total: ₹" +
        ticketData.total +
        "\n\n" +

        "Status: Booking Confirmed";


    if (navigator.share) {

        navigator.share({

            title:
                "Railway Ticket",

            text:
                shareText

        });

    }

    else {

        navigator.clipboard.writeText(
            shareText
        );


        alert(
            "Ticket details copied!"
        );

    }

}



function bookAnother() {

    localStorage.removeItem(
        "selectedRoute"
    );

    localStorage.removeItem(
        "ticketData"
    );


    window.location.href =
        "routes.html";

}



loadTicket();
