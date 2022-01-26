var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "maxResponseTime": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "meanResponseTime": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "percentiles2": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "percentiles3": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "percentiles4": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
},
contents: {
"group_s2s-authorisati-2a1ea": {
          type: "GROUP",
name: "S2S Authorisation",
path: "S2S Authorisation",
pathFormatted: "group_s2s-authorisati-2a1ea",
stats: {
    "name": "S2S Authorisation",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "maxResponseTime": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "meanResponseTime": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "percentiles2": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "percentiles3": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "percentiles4": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
},
contents: {
"req_paymentapitoken-3d101": {
        type: "REQUEST",
        name: "PaymentAPIToken_020_GetServiceToken",
path: "S2S Authorisation / PaymentAPIToken_020_GetServiceToken",
pathFormatted: "req_s2s-authorisati-b6a49",
stats: {
    "name": "PaymentAPIToken_020_GetServiceToken",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "maxResponseTime": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "meanResponseTime": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "percentiles2": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "percentiles3": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "percentiles4": {
        "total": "61",
        "ok": "-",
        "ko": "61"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "-",
        "ko": "1"
    }
}
    }
}

     }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
