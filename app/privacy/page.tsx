import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy - FocusTomato",
  description: "Privacy Policy for FocusTomato."
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      effectiveDate="May 18, 2026"
      intro="FocusTomato is designed as a local-first macOS app. This policy explains what the app stores, what it does not collect, and how it uses system permissions."
      chineseSections={[
        {
          title: "我们收集什么",
          body: [
            "FocusTomato 当前版本不会将个人数据上传到我们的服务器，也不包含账号系统、远程分析服务、广告追踪 SDK 或云端同步服务。",
            "我们不会出售个人信息，也不会为了跨应用或跨网站追踪而收集数据。"
          ]
        },
        {
          title: "本地存储的数据",
          body: [
            "应用会在你的 Mac 本地保存设置、预设、专注记录和统计信息，以便恢复你的偏好并展示使用历史。",
            "这些数据保存在设备本地，不会由 FocusTomato 自动上传。"
          ]
        },
        {
          title: "系统权限",
          body: [
            "通知权限仅用于发送本地系统通知，例如专注开始、结束或暂停提醒。",
            "Apple Events 权限仅用于与受支持浏览器交互，以执行你配置的网站拦截规则。"
          ]
        },
        {
          title: "儿童隐私",
          body: [
            "FocusTomato 不会故意收集儿童的个人信息。由于当前版本不进行远程数据收集，我们也不会基于年龄建立用户画像。"
          ]
        },
        {
          title: "政策更新",
          body: [
            "如果未来功能或数据处理方式发生变化，我们会更新本页面，并以新的生效日期标记。"
          ]
        },
        {
          title: "联系我们",
          body: [
            "如有隐私相关问题，请通过 GitHub 联系我们：https://github.com/alexab612"
          ]
        }
      ]}
      englishSections={[
        {
          title: "What We Collect",
          body: [
            "The current version of FocusTomato does not upload personal data to our servers and does not include accounts, remote analytics, advertising trackers, or a cloud sync service.",
            "We do not sell personal information or collect data for cross-app or cross-website tracking."
          ]
        },
        {
          title: "Data Stored Locally",
          body: [
            "FocusTomato stores settings, presets, focus-session history, and statistics locally on your Mac so it can restore your preferences and show your history.",
            "This data stays on your device and is not automatically uploaded by FocusTomato."
          ]
        },
        {
          title: "System Permissions",
          body: [
            "Notification permission is used only for local operating-system notifications, such as focus start, completion, and pause reminders.",
            "Apple Events permission is used only to interact with supported browsers so the app can enforce the website blocking rules you configure."
          ]
        },
        {
          title: "Children's Privacy",
          body: [
            "FocusTomato does not knowingly collect personal information from children. Because the current app does not remotely collect personal data, it does not build age-based user profiles."
          ]
        },
        {
          title: "Changes to This Policy",
          body: [
            "If future features or data-handling practices change, we will update this page and identify the new effective date."
          ]
        },
        {
          title: "Contact",
          body: [
            "For privacy questions, contact us on GitHub: https://github.com/alexab612"
          ]
        }
      ]}
    />
  );
}
