let Setting = {
  data() {
    return {
      device: "pc",
      view: "mobile",
    };
  },
  beforeMount() {
    this.settingDevice();
  },
  mounted() {
    window.addEventListener("resize",() => {
      this.settingDevice();
    },true);
  },
  update(){
    this.settingDevice();
  },
  methods: {
    settingDevice() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        this.device = "mobile";
      } else {
        this.device = "pc";
      }
      this.view = window.innerWidth >= 1280? "pc" : window.innerWidth >= 768 ? "tablet" : "mobile";
    }
  },
};
export default Setting;
