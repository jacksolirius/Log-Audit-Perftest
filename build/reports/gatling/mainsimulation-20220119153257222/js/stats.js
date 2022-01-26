var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "59",
        "ok": "59",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "32",
        "ok": "32",
        "ko": "-"
    },
    "percentiles1": {
        "total": "91",
        "ok": "91",
        "ko": "-"
    },
    "percentiles2": {
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "percentiles3": {
        "total": "145",
        "ok": "145",
        "ko": "-"
    },
    "percentiles4": {
        "total": "198",
        "ok": "198",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 40,
        "percentage": 100
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
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.69",
        "ok": "0.69",
        "ko": "-"
    }
},
contents: {
"req_csrf-check-e0594": {
        type: "REQUEST",
        name: "CSRF check",
path: "CSRF check",
pathFormatted: "req_csrf-check-e0594",
stats: {
    "name": "CSRF check",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "59",
        "ok": "59",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "12",
        "ok": "12",
        "ko": "-"
    },
    "percentiles1": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "percentiles2": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "percentiles3": {
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "percentiles4": {
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 20,
        "percentage": 100
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
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.345",
        "ok": "0.345",
        "ko": "-"
    }
}
    },"req_ccdlogin-edf91": {
        type: "REQUEST",
        name: "CCDlogin",
path: "CCDlogin",
pathFormatted: "req_ccdlogin-edf91",
stats: {
    "name": "CCDlogin",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "30",
        "ko": "-"
    },
    "percentiles1": {
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "percentiles2": {
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "percentiles3": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "percentiles4": {
        "total": "200",
        "ok": "200",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 20,
        "percentage": 100
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
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.345",
        "ok": "0.345",
        "ko": "-"
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
