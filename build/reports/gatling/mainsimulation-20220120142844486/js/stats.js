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
        "total": "58",
        "ok": "-",
        "ko": "58"
    },
    "maxResponseTime": {
        "total": "82",
        "ok": "-",
        "ko": "82"
    },
    "meanResponseTime": {
        "total": "70",
        "ok": "-",
        "ko": "70"
    },
    "standardDeviation": {
        "total": "12",
        "ok": "-",
        "ko": "12"
    },
    "percentiles1": {
        "total": "70",
        "ok": "-",
        "ko": "70"
    },
    "percentiles2": {
        "total": "76",
        "ok": "-",
        "ko": "76"
    },
    "percentiles3": {
        "total": "81",
        "ok": "-",
        "ko": "81"
    },
    "percentiles4": {
        "total": "82",
        "ok": "-",
        "ko": "82"
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
        "total": "0.667",
        "ok": "-",
        "ko": "0.667"
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
        "total": "82",
        "ok": "-",
        "ko": "82"
    },
    "maxResponseTime": {
        "total": "82",
        "ok": "-",
        "ko": "82"
    },
    "meanResponseTime": {
        "total": "82",
        "ok": "-",
        "ko": "82"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "82",
        "ok": "-",
        "ko": "82"
    },
    "percentiles2": {
        "total": "82",
        "ok": "-",
        "ko": "82"
    },
    "percentiles3": {
        "total": "82",
        "ok": "-",
        "ko": "82"
    },
    "percentiles4": {
        "total": "82",
        "ok": "-",
        "ko": "82"
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
        "total": "0.333",
        "ok": "-",
        "ko": "0.333"
    }
}
    },"req_ccd-search-aa754": {
        type: "REQUEST",
        name: "CCD Search",
path: "CCD Search",
pathFormatted: "req_ccd-search-aa754",
stats: {
    "name": "CCD Search",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "58",
        "ok": "-",
        "ko": "58"
    },
    "maxResponseTime": {
        "total": "58",
        "ok": "-",
        "ko": "58"
    },
    "meanResponseTime": {
        "total": "58",
        "ok": "-",
        "ko": "58"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "58",
        "ok": "-",
        "ko": "58"
    },
    "percentiles2": {
        "total": "58",
        "ok": "-",
        "ko": "58"
    },
    "percentiles3": {
        "total": "58",
        "ok": "-",
        "ko": "58"
    },
    "percentiles4": {
        "total": "58",
        "ok": "-",
        "ko": "58"
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
        "total": "0.333",
        "ok": "-",
        "ko": "0.333"
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
