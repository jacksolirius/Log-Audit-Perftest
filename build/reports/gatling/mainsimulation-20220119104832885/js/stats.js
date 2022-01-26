var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "maxResponseTime": {
        "total": "74",
        "ok": "-",
        "ko": "74"
    },
    "meanResponseTime": {
        "total": "52",
        "ok": "-",
        "ko": "52"
    },
    "standardDeviation": {
        "total": "23",
        "ok": "-",
        "ko": "23"
    },
    "percentiles1": {
        "total": "52",
        "ok": "-",
        "ko": "52"
    },
    "percentiles2": {
        "total": "63",
        "ok": "-",
        "ko": "63"
    },
    "percentiles3": {
        "total": "72",
        "ok": "-",
        "ko": "72"
    },
    "percentiles4": {
        "total": "74",
        "ok": "-",
        "ko": "74"
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
        "count": 2,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "-",
        "ko": "2"
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
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "74",
        "ok": "-",
        "ko": "74"
    },
    "maxResponseTime": {
        "total": "74",
        "ok": "-",
        "ko": "74"
    },
    "meanResponseTime": {
        "total": "74",
        "ok": "-",
        "ko": "74"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "74",
        "ok": "-",
        "ko": "74"
    },
    "percentiles2": {
        "total": "74",
        "ok": "-",
        "ko": "74"
    },
    "percentiles3": {
        "total": "74",
        "ok": "-",
        "ko": "74"
    },
    "percentiles4": {
        "total": "74",
        "ok": "-",
        "ko": "74"
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
    },"req_ccdlogin-edf91": {
        type: "REQUEST",
        name: "CCDlogin",
path: "CCDlogin",
pathFormatted: "req_ccdlogin-edf91",
stats: {
    "name": "CCDlogin",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "maxResponseTime": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "meanResponseTime": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "percentiles2": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "percentiles3": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "percentiles4": {
        "total": "29",
        "ok": "-",
        "ko": "29"
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
