import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use - FocusTomato",
  description: "Terms of Use for FocusTomato."
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      effectiveDate="May 18, 2026"
      intro="FocusTomato is distributed through Apple platforms. Unless a custom agreement is provided, your use of the app is governed by Apple's Standard End User License Agreement together with the supplemental terms below."
      chineseSections={[
        {
          title: "许可协议",
          body: [
            "FocusTomato 通过 Apple 平台分发。除非另行提供自定义许可协议，否则你的使用受 Apple 标准最终用户许可协议约束。",
            "Apple 标准 EULA 可在 Apple 官方法律页面查看：https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          ]
        },
        {
          title: "使用范围",
          body: [
            "你可以按照应用功能和适用法律使用 FocusTomato。你不得尝试破坏、滥用或规避应用、操作系统或第三方服务的安全机制。"
          ]
        },
        {
          title: "本地数据与责任",
          body: [
            "应用的设置、预设和统计数据保存在你的设备本地。你应自行管理设备、系统权限以及任何本地数据备份。"
          ]
        },
        {
          title: "功能变更",
          body: [
            "我们可能会改进、调整或移除功能。若这些条款发生重要变化，我们会更新本页面并标记新的生效日期。"
          ]
        },
        {
          title: "联系我们",
          body: [
            "如有条款相关问题，请通过 GitHub 联系我们：https://github.com/alexab612"
          ]
        }
      ]}
      englishSections={[
        {
          title: "License Agreement",
          body: [
            "FocusTomato is distributed through Apple platforms. Unless a custom license agreement is provided, your use of the app is governed by Apple's Standard End User License Agreement.",
            "Apple's Standard EULA is available on Apple's official legal site: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          ]
        },
        {
          title: "Permitted Use",
          body: [
            "You may use FocusTomato according to its intended features and applicable law. You may not attempt to disrupt, abuse, or bypass the security of the app, the operating system, or third-party services."
          ]
        },
        {
          title: "Local Data and Responsibility",
          body: [
            "The app stores settings, presets, and statistics locally on your device. You remain responsible for your device, system permissions, and any backups of local data."
          ]
        },
        {
          title: "Changes",
          body: [
            "We may improve, modify, or remove features over time. If these terms materially change, we will update this page and identify the new effective date."
          ]
        },
        {
          title: "Contact",
          body: [
            "For questions about these terms, contact us on GitHub: https://github.com/alexab612"
          ]
        }
      ]}
    />
  );
}
