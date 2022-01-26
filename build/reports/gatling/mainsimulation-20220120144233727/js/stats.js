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
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "maxResponseTime": {
        "total": "7187",
        "ok": "-",
        "ko": "7187"
    },
    "meanResponseTime": {
        "total": "3624",
        "ok": "-",
        "ko": "3624"
    },
    "standardDeviation": {
        "total": "3564",
        "ok": "-",
        "ko": "3564"
    },
    "percentiles1": {
        "total": "3624",
        "ok": "-",
        "ko": "3624"
    },
    "percentiles2": {
        "total": "5405",
        "ok": "-",
        "ko": "5405"
    },
    "percentiles3": {
        "total": "6831",
        "ok": "-",
        "ko": "6831"
    },
    "percentiles4": {
        "total": "7116",
        "ok": "-",
        "ko": "7116"
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
        "total": "0.2",
        "ok": "-",
        "ko": "0.2"
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
        "total": "7187",
        "ok": "-",
        "ko": "7187"
    },
    "maxResponseTime": {
        "total": "7187",
        "ok": "-",
        "ko": "7187"
    },
    "meanResponseTime": {
        "total": "7187",
        "ok": "-",
        "ko": "7187"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "7187",
        "ok": "-",
        "ko": "7187"
    },
    "percentiles2": {
        "total": "7187",
        "ok": "-",
        "ko": "7187"
    },
    "percentiles3": {
        "total": "7187",
        "ok": "-",
        "ko": "7187"
    },
    "percentiles4": {
        "total": "7187",
        "ok": "-",
        "ko": "7187"
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
        "total": "0.1",
        "ok": "-",
        "ko": "0.1"
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
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "maxResponseTime": {
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "meanResponseTime": {
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "percentiles2": {
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "percentiles3": {
        "total": "60",
        "ok": "-",
        "ko": "60"
    },
    "percentiles4": {
        "total": "60",
        "ok": "-",
        "ko": "60"
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
        "total": "0.1",
        "ok": "-",
        "ko": "0.1"
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
