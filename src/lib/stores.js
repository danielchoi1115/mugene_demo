import { writable } from "svelte/store"
import {toRelativeTimeString} from "./common"
export const sequences = [
    {   
        sequenceId: "124f58e4fa0c3",
        dir: "/RT-qPCR",
        filename: "pt_test_2022.csv",
        addedDate: new Date("2022-06-25T12:44:00Z"),
        five_cap: "GA",
        five_utr: "GAAUAAAG UAGUAUUCUU CUGGUCCCCA CAGACUCAGA GAGAACCCGC CACCGUA",
        coding: "GGCUGAU",
        three_utr: "GUAUCUGAU",
        tail: "AGCUGAU"
    },
    {
        sequenceId: Math.random().toString(16).slice(2),
        dir: "/Analytics",
        filename: "analysis1.csv",
        addedDate: new Date("2022-06-27T12:44:00Z"),
        five_cap: "CAA",
        five_utr: "CGA",
        coding: "GGCUGAGACAU",
        three_utr: "GUAUAGAGCUGAU",
        tail: "AGCUGAGAGAGAU"
    },
    {
        sequenceId: Math.random().toString(16).slice(2),
        dir: "/Proteomic",
        filename: "proto20220717.csv",
        addedDate: new Date("2022-06-27T12:44:00Z"),
        five_cap: "CAA",
        five_utr: "CGA",
        coding: "GGCUGAGACAU",
        three_utr: "GUAUAGAGCUGAU",
        tail: "AGCUGAGAGAGAU"
    },
    {
        sequenceId: Math.random().toString(16).slice(2),
        dir: "/Proteomic",
        filename: "proto20220617.csv",
        addedDate: new Date("2022-06-27T12:44:00Z"),
        five_cap: "CAA",
        five_utr: "CGA",
        coding: "GGCUGAGACAU",
        three_utr: "GUAUAGAGCUGAU",
        tail: "AGCUGAGAGAGAU"
    },
    {
        sequenceId: Math.random().toString(16).slice(2),
        dir: "/Chron Sample",
        filename: "test12323120.csv",
        addedDate: new Date("2022-06-27T12:44:00Z"),
        five_cap: "CAA",
        five_utr: "CGA",
        coding: "GGCUGAGACAU",
        three_utr: "GUAUAGAGCUGAU",
        tail: "AGCUGAGAGAGAU"
    }
]
export const shared_data = writable({
    lastReportId: 5,
    lastParameterId: 0,
    savedParameters: [],
    reports: [
      {
        id: 5,
        requestId: Math.random().toString(16).slice(2),
        reportName: "LUAD Report New",
        hashtags: [{value:"#chronproject992"}, {value:"#research291"}, {value:"#important"}],
        status: "pending",
        requester: "Jacob02",
        requestedTime: new Date(),
        generatedTime: null,
        processTime: 24,
        results: [
          {
            sequence: {
              sequenceId: "124f58e4fa0c3",
              dir: "/RT-qPCR",
              filename: "test22025012.csv",
              addedDate: new Date("2022-06-25T12:44:00Z"),
              five_cap: "GA",
              five_utr:
                "GAAUAAAG UAGUAUUCUU CUGGUCCCCA CAGACUCAGA GAGAACCCGC CACCGUA",
              coding: "GGCUGAU",
              three_utr: "GUAUCUGAU",
              tail: "AGCUGAU",
            },
            MHC: "HLA-a",
            options: [],
            overall_score: 0.68,
            score_immuno: 0.77,
            score_degradablity: 0.85,
            half_life: 12.3,
            binding: 0.8,
          },
          {
            sequence: {
              sequenceId: "124f58e4fa0c3",
              dir: "/RT-qPCR",
              filename: "test22025012.csv",
              addedDate: new Date("2022-06-25T12:44:00Z"),
              five_cap: "GA",
              five_utr:
                "GAAUAAAG UAGUAUUCUU CUGGUCCCCA CAGACUCAGA GAGAACCCGC CACCGUA",
              coding: "GGCUGAU",
              three_utr: "GUAUCUGAU",
              tail: "AGCUGAU",
            },
            MHC: "HLA-a",
            options: [],
            overall_score: 0.68,
            score_immuno: 0.77,
            score_degradablity: 0.85,
            half_life: 12.3,
            binding: 0.8,
          },
          {
            sequence: {
              sequenceId: "124f58e4fa0c3",
              dir: "/RT-qPCR",
              filename: "test22025012.csv",
              addedDate: new Date("2022-06-25T12:44:00Z"),
              five_cap: "GA",
              five_utr:
                "GAAUAAAG UAGUAUUCUU CUGGUCCCCA CAGACUCAGA GAGAACCCGC CACCGUA",
              coding: "GGCUGAU",
              three_utr: "GUAUCUGAU",
              tail: "AGCUGAU",
            },
            MHC: "HLA-a",
            options: [],
            overall_score: 0.68,
            score_immuno: 0.77,
            score_degradablity: 0.85,
            half_life: 12.3,
            binding: 0.8,
          },
          {
            sequence: {
              sequenceId: "124f58e4fa0c3",
              dir: "/RT-qPCR",
              filename: "test22025012.csv",
              addedDate: new Date("2022-06-25T12:44:00Z"),
              five_cap: "GA",
              five_utr:
                "GAAUAAAG UAGUAUUCUU CUGGUCCCCA CAGACUCAGA GAGAACCCGC CACCGUA",
              coding: "GGCUGAU",
              three_utr: "GUAUCUGAU",
              tail: "AGCUGAU",
            },
            MHC: "HLA-a",
            options: [],
            overall_score: 0.68,
            score_immuno: 0.77,
            score_degradablity: 0.85,
            half_life: 12.3,
            binding: 0.8,
          },
        ],
      },
      {
        id: 4,
        requestId: Math.random().toString(16).slice(2),
        reportName: "LUAD Report 1",
        hashtags: [{value:"#chronproject992"}, {value:"#research291"}],
        status: "pending",
        requester: "Jacob02",
        requestedTime: new Date(),
        generatedTime: null,
        processTime: 24,
        results: [
          {
            sequence: {
              sequenceId: "124f58e4fa0c3",
              dir: "/RT-qPCR",
              filename: "test22025012.csv",
              addedDate: new Date("2022-06-25T12:44:00Z"),
              five_cap: "GA",
              five_utr:
                "GAAUAAAG UAGUAUUCUU CUGGUCCCCA CAGACUCAGA GAGAACCCGC CACCGUA",
              coding: "GGCUGAU",
              three_utr: "GUAUCUGAU",
              tail: "AGCUGAU",
            },
            MHC: "HLA-a",
            options: [],
            overall_score: 0.68,
            score_immuno: 0.77,
            score_degradablity: 0.85,
            half_life: 12.3,
            binding: 0.8,
          },
          {
            sequence: {
              sequenceId: "124f58e4fa0c3",
              dir: "/RT-qPCR",
              filename: "test22025012.csv",
              addedDate: new Date("2022-06-25T12:44:00Z"),
              five_cap: "GA",
              five_utr:
                "GAAUAAAG UAGUAUUCUU CUGGUCCCCA CAGACUCAGA GAGAACCCGC CACCGUA",
              coding: "GGCUGAU",
              three_utr: "GUAUCUGAU",
              tail: "AGCUGAU",
            },
            MHC: "HLA-a",
            options: [],
            overall_score: 0.68,
            score_immuno: 0.77,
            score_degradablity: 0.85,
            half_life: 12.3,
            binding: 0.8,
          },
          {
            sequence: {
              sequenceId: "124f58e4fa0c3",
              dir: "/RT-qPCR",
              filename: "test22025012.csv",
              addedDate: new Date("2022-06-25T12:44:00Z"),
              five_cap: "GA",
              five_utr:
                "GAAUAAAG UAGUAUUCUU CUGGUCCCCA CAGACUCAGA GAGAACCCGC CACCGUA",
              coding: "GGCUGAU",
              three_utr: "GUAUCUGAU",
              tail: "AGCUGAU",
            },
            MHC: "HLA-a",
            options: [],
            overall_score: 0.68,
            score_immuno: 0.77,
            score_degradablity: 0.85,
            half_life: 12.3,
            binding: 0.8,
          },
          {
            sequence: {
              sequenceId: "124f58e4fa0c3",
              dir: "/RT-qPCR",
              filename: "test22025012.csv",
              addedDate: new Date("2022-06-25T12:44:00Z"),
              five_cap: "GA",
              five_utr:
                "GAAUAAAG UAGUAUUCUU CUGGUCCCCA CAGACUCAGA GAGAACCCGC CACCGUA",
              coding: "GGCUGAU",
              three_utr: "GUAUCUGAU",
              tail: "AGCUGAU",
            },
            MHC: "HLA-a",
            options: [],
            overall_score: 0.68,
            score_immuno: 0.77,
            score_degradablity: 0.85,
            half_life: 12.3,
            binding: 0.8,
          },
        ],
      },
      {
        id: 3,
        requestId: Math.random().toString(16).slice(2),
        reportName: "Untitled_9",
        hashtags: [{value:"#sample"}],
        status: "pending",
        requester: "Jacob02",
        requestedTime: new Date(),
        generatedTime: null,
        processTime: 24,
        results: [
          {
            sequence: {
              sequenceId: "124f58e4fa0c3",
              dir: "/RT-qPCR",
              filename: "test22025012.csv",
              addedDate: new Date("2022-06-25T12:44:00Z"),
              five_cap: "GA",
              five_utr:
                "GAAUAAAG UAGUAUUCUU CUGGUCCCCA CAGACUCAGA GAGAACCCGC CACCGUA",
              coding: "GGCUGAU",
              three_utr: "GUAUCUGAU",
              tail: "AGCUGAU",
            },
            MHC: "HLA-a",
            options: [],
            overall_score: 0.68,
            score_immuno: 0.77,
            score_degradablity: 0.85,
            half_life: 12.3,
            binding: 0.8,
          },
        ],
      },
      {
        id: 2,
        requestId: Math.random().toString(16).slice(2),
        reportName: "LUAD Report 2",
        hashtags: [{value:"#depreciated"}],
        status: "generated",
        requester: "Jacob02",
        requestedTime: new Date(),
        generatedTime: new Date(),
        processTime: 24,
        results: [
          {
            sequence: {
              sequenceId: "124f58e4fa0c3",
              dir: "/RT-qPCR",
              filename: "test22025012.csv",
              addedDate: new Date("2022-06-25T12:44:00Z"),
              five_cap: "GA",
              five_utr:
                "GAAUAAAG UAGUAUUCUU CUGGUCCCCA CAGACUCAGA GAGAACCCGC CACCGUA",
              coding: "GGCUGAU",
              three_utr: "GUAUCUGAU",
              tail: "AGCUGAU",
            },
            MHC: "HLA-a",
            options: [],
            overall_score: 0.68,
            score_immuno: 0.77,
            score_degradablity: 0.85,
            half_life: 12.3,
            binding: 0.8,
          },
        ],
      },
      {
        id: 1,
        requestId: Math.random().toString(16).slice(2),
        reportName: "LUAD Report 3",
        hashtags: [],
        status: "generated",
        requester: "Jacob02",
        requestedTime: new Date(),
        generatedTime: new Date(),
        processTime: 24,
        results: [
          {
            sequence: {
              sequenceId: "124f58e4fa0c3",
              dir: "/RT-qPCR",
              filename: "test22025012.csv",
              addedDate: new Date("2022-06-25T12:44:00Z"),
              five_cap: "GA",
              five_utr:
                "GAAUAAAG UAGUAUUCUU CUGGUCCCCA CAGACUCAGA GAGAACCCGC CACCGUA",
              coding: "GGCUGAU",
              three_utr: "GUAUCUGAU",
              tail: "AGCUGAU",
            },
            MHC: "HLA-a",
            options: [],
            overall_score: 0.68,
            score_immuno: 0.77,
            score_degradablity: 0.85,
            half_life: 12.3,
            binding: 0.8,
          },
        ],
      },
    ]
});

export function addSavedParameters(newSavedParameter) {
    shared_data.update($shared_data => {
        $shared_data.savedParameters.unshift(newSavedParameter);
        $shared_data.lastParameterId += 1;
        return $shared_data;
    })
}

export function deleteSavedParameters(id) {
    shared_data.update($shared_data => {
        $shared_data.savedParameters = removeSavedParametersById($shared_data.savedParameters, id)
        return $shared_data;
    })
}
export function clearSavedParameters() {
  shared_data.update($shared_data => {
    $shared_data.savedParameters = [];
    return $shared_data;
})
}
export function addReport(newReport) {
  shared_data.update($shared_data => {
      $shared_data.reports.unshift(newReport);
      $shared_data.lastReportId += 1;
      return $shared_data;
  })
}

function removeSavedParametersById(arr, id) { 
    return arr.filter(function(ele){ 
        return ele.id != id; 
    });
}
