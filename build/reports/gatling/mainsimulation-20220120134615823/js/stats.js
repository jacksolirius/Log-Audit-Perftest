var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "656",
        "ok": "656",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "460",
        "ok": "460",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "197",
        "ok": "197",
        "ko": "-"
    },
    "percentiles1": {
        "total": "460",
        "ok": "460",
        "ko": "-"
    },
    "percentiles2": {
        "total": "558",
        "ok": "558",
        "ko": "-"
    },
    "percentiles3": {
        "total": "636",
        "ok": "636",
        "ko": "-"
    },
    "percentiles4": {
        "total": "652",
        "ok": "652",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
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
        "total": "1",
        "ok": "1",
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
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "percentiles2": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "percentiles3": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "percentiles4": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
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
        "total": "0.5",
        "ok": "0.5",
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
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "656",
        "ok": "656",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "656",
        "ok": "656",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "656",
        "ok": "656",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "656",
        "ok": "656",
        "ko": "-"
    },
    "percentiles2": {
        "total": "656",
        "ok": "656",
        "ko": "-"
    },
    "percentiles3": {
        "total": "656",
        "ok": "656",
        "ko": "-"
    },
    "percentiles4": {
        "total": "656",
        "ok": "656",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
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
        "total": "0.5",
        "ok": "0.5",
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
