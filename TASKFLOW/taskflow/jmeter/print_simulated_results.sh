#!/bin/bash
# Simula prints após execução de teste de estresse JMeter
# (o usuário pediu para "implementar os prints simulados" — aqui temos um script que imprime um sumário)

echo "--- JMeter Test Simulation Results (simulado) ---"
echo "Data: $(date --iso-8601=seconds)"
echo "Total Requests: 10000"
echo "Successful: 9950"
echo "Failed: 50"
echo "Throughput: 350 req/s (simulado)"
echo "Avg Latency: 120 ms (simulado)"
echo "Max Latency: 1200 ms (simulado)"
echo "Errors breakdown: 50 x 500 Internal Server Error (simulado)"
echo "---------------------------------------------"
