import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy - Inchbox",
  description: "Privacy Policy for Inchbox."
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      effectiveDate="October 28, 2026"
      intro="Inchbox is a local-first macOS app. It does not collect, upload, or share any personal data — all settings and history stay on your Mac. 简而言之：Inchbox 不收集、不上传任何数据，所有设置只保存在你的 Mac 上。"
      chineseSections={[
        {
          title: "我们收集什么",
          body: [
            "Inchbox 不收集任何个人数据，也不会把任何数据上传到我们或第三方的服务器。应用不包含账号系统、远程分析服务、广告追踪 SDK 或云端同步服务，运行时不会主动发起网络请求。",
            "我们不会出售个人信息，也不会为了跨应用或跨网站追踪而收集数据。"
          ]
        },
        {
          title: "本地存储的数据",
          body: [
            "应用会在你的 Mac 本地保存设置、预设、专注记录、统计信息，以及设备锁定的状态和紧急解锁记录，以便恢复你的偏好、在重启后恢复锁定并展示使用历史。",
            "这些数据保存在设备本地，不会由 Inchbox 自动上传。"
          ]
        },
        {
          title: "系统权限",
          body: [
            "通知权限仅用于发送本地系统通知，例如专注开始、结束或暂停提醒。",
            "Apple Events 权限仅用于与受支持浏览器交互，以执行你配置的网站拦截规则。应用只读取当前标签页的网址用于比对，不会记录或上传你的浏览内容。",
            "设备锁定功能只在你的 Mac 上显示全屏遮罩，不会读取屏幕内容，也不会访问其他应用的数据。"
          ]
        },
        {
          title: "儿童隐私",
          body: [
            "Inchbox 不会故意收集儿童的个人信息。由于当前版本不进行远程数据收集，我们也不会基于年龄建立用户画像。"
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
            "Inchbox does not collect any personal data and does not upload any data to our servers or to third parties. The app has no accounts, remote analytics, advertising trackers, or cloud sync, and it does not make network requests while running.",
            "We do not sell personal information or collect data for cross-app or cross-website tracking."
          ]
        },
        {
          title: "Data Stored Locally",
          body: [
            "Inchbox stores settings, presets, focus-session history, statistics, device-lock state, and emergency-unlock records locally on your Mac so it can restore your preferences, resume a lock after a restart, and show your history.",
            "This data stays on your device and is not automatically uploaded by Inchbox."
          ]
        },
        {
          title: "System Permissions",
          body: [
            "Notification permission is used only for local operating-system notifications, such as focus start, completion, and pause reminders.",
            "Apple Events permission is used only to interact with supported browsers so the app can enforce the website blocking rules you configure. The app reads the current tab's address only to compare it with your rules; it does not record or upload your browsing.",
            "Device Lock only shows a full-screen overlay on your Mac. It does not read screen contents or access other apps' data."
          ]
        },
        {
          title: "Children's Privacy",
          body: [
            "Inchbox does not knowingly collect personal information from children. Because the current app does not remotely collect personal data, it does not build age-based user profiles."
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
