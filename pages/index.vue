<template>
  <section class="container">
    <Location
      :list="[
        {
          name: 'OPENIP',
          link: '',
        },
        {
          name: '거래방식',
          link: '',
        },
      ]"
    />
    <div class="inner">
      <div class="top">
        <button class="btn">상품 등록</button>
        <button class="btn">열기</button>
        <button class="btn dark">삭제</button>
      </div>
      <div class="contents">
        <no-ssr>
          <grid :data="gridProps.data" :columns="gridProps.columns" />
        </no-ssr>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "~/components/layouts/Header";
import Location from "~/components/layouts/Location";

export default {
  data() {
    return {};
  },
  created() {
    this.gridProps = {
      data: [
        // for rowData prop
        {
          c1: "1992/03/25",
          c2: "12/06/2019",
          c3: "2014-04-16",
          c4: "2019-11-19 09:00 AM",
          c5: "2019-11-19 09:00 AM",
          c6: "2019-01",
          c7: "2019",
        },
      ],
      columns: [
        {
          header: "DatePicker (Default)",
          name: "c1",
          editor: "datePicker",
        },
        {
          header: "DatePicker (Using options)",
          name: "c2",
          editor: {
            type: "datePicker",
            options: {
              format: "dd/MM/yyyy",
            },
          },
        },
        {
          header: "DatePicker (selectableRanges)",
          name: "c3",
          editor: {
            type: "datePicker",
            options: {
              selectableRanges: [
                [new Date(2014, 3, 10), new Date(2014, 5, 20)],
              ],
            },
          },
        },
        {
          header: "Date-TimePicker",
          name: "c4",
          editor: {
            type: "datePicker",
            options: {
              format: "yyyy-MM-dd HH:mm A",
              timepicker: true,
            },
          },
        },
        {
          header: "Date-TimePicker With tab",
          name: "c5",
          editor: {
            type: "datePicker",
            options: {
              format: "yyyy-MM-dd HH:mm A",
              timepicker: {
                layoutType: "tab",
                inputType: "spinbox",
              },
            },
          },
        },
        {
          header: "MonthPicker",
          name: "c6",
          editor: {
            type: "datePicker",
            options: {
              format: "yyyy-MM",
              type: "month",
            },
          },
        },
        {
          header: "YearPicker",
          name: "c7",
          editor: {
            type: "datePicker",
            options: {
              format: "yyyy",
              type: "year",
            },
          },
        },
      ],
    };
  },
  components: {
    Header,
    Location,
    // Grid
  },
  methods: {},
};
</script>
