<template>
  <Pie
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Pie } from "vue-chartjs/legacy";
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "PieChart",
  components: {
    Pie,
  },
  props: {
    chartId: {
      type: String,
      default: "pie-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 256,
    },
    height: {
      type: Number,
      default: 218,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartData: {
        datasets: [
          {
            backgroundColor: ["#013299", "#FE0000"],
            data: [60, 40],
          },
          
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          enabled: false,
        },
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              const datapoints = ctx.chart.data.datasets[0].data;
              const total = datapoints.reduce(
                (total, datapoint) => total + datapoint,
                0
              );
              const percentage = (value / total) * 100;
              return percentage.toFixed(0) + "%";
            },
            color: "#fff",
          },
        },
      },
    };
  },
};
</script>
