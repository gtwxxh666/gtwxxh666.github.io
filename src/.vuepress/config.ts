import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "汤木的幻想乡",
  description: "哭也不会改变什么，这个世界从来不会对任何人温柔。",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
