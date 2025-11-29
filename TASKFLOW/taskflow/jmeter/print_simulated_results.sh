#!/bin/bash

echo "--- JMeter Test Results  ---"
echo "Data: $(date --iso-8601=seconds)"
echo "Total Requests: 10000"
echo "Successful: 9950"
echo "Failed: 50"
echo "Throughput: 350 req/s (simulado)"
echo "Avg Latency: 120 ms (simulado)"
echo "Max Latency: 1200 ms (simulado)"
echo "Errors breakdown: 50 x 500 Internal Server Error"
echo "---------------------------------------------"
