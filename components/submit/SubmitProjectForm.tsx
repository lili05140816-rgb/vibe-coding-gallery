"use client";

import { useState } from "react";

import { SubmitSuccessCard } from "@/components/submit/SubmitSuccessCard";
import type { Category, ProjectStatus } from "@/types/project";

type SubmitProjectFormProps = {
  categories: Category[];
};

type FormValues = {
  projectName: string;
  subtitle: string;
  category: string;
  status: ProjectStatus | "";
  tags: string;
  demoUrl: string;
  targetUsers: string;
  features: string;
  description: string;
  developerName: string;
  contact: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  projectName: "",
  subtitle: "",
  category: "",
  status: "",
  tags: "",
  demoUrl: "",
  targetUsers: "",
  features: "",
  description: "",
  developerName: "",
  contact: "",
};

const statusOptions: Array<{ value: ProjectStatus; label: string }> = [
  { value: "showcase", label: "仅展示" },
  { value: "demo", label: "可体验" },
  { value: "paid", label: "可咨询" },
  { value: "custom", label: "接定制" },
  { value: "opensource", label: "开源" },
];

const inputClass =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100";
const labelClass = "text-sm font-semibold text-slate-700";
const errorClass = "mt-2 text-sm text-rose-600";

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const requiredFields: Array<keyof FormValues> = [
    "projectName",
    "subtitle",
    "category",
    "status",
    "targetUsers",
    "features",
    "description",
    "developerName",
    "contact",
  ];

  requiredFields.forEach((field) => {
    if (!values[field].trim()) {
      errors[field] = "请补充这个必填项。";
    }
  });

  if (values.projectName.trim().length > 0 && values.projectName.trim().length < 2) {
    errors.projectName = "项目名称至少需要 2 个字符。";
  }

  if (values.subtitle.trim().length > 0 && values.subtitle.trim().length < 6) {
    errors.subtitle = "一句话介绍至少需要 6 个字符。";
  }

  if (
    values.description.trim().length > 0 &&
    values.description.trim().length < 20
  ) {
    errors.description = "项目详细介绍至少需要 20 个字符。";
  }

  return errors;
}

export function SubmitProjectForm({ categories }: SubmitProjectFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitted(true);
    }
  }

  function handleContinue() {
    setValues(initialValues);
    setErrors({});
    setIsSubmitted(false);
  }

  if (isSubmitted) {
    return <SubmitSuccessCard onContinue={handleContinue} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-7"
    >
      <div>
        <p className="text-sm font-semibold text-cyan-700">作品信息</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">
          提交你的 Vibe Coding 作品
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          填写后会显示前端模拟成功提示，第一阶段不会保存到数据库。
        </p>
      </div>

      {Object.keys(errors).length > 0 ? (
        <div className="mt-6 rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          请检查表单中标红的内容后再提交。
        </div>
      ) : null}

      <div className="mt-6 grid gap-5">
        <label className={labelClass}>
          项目名称
          <input
            value={values.projectName}
            onChange={(event) => updateValue("projectName", event.target.value)}
            className={inputClass}
            placeholder="例如：英语单词背诵打卡工具"
          />
          {errors.projectName ? (
            <p className={errorClass}>{errors.projectName}</p>
          ) : null}
        </label>

        <label className={labelClass}>
          一句话介绍
          <input
            value={values.subtitle}
            onChange={(event) => updateValue("subtitle", event.target.value)}
            className={inputClass}
            placeholder="用一句话说明这个工具解决什么问题"
          />
          {errors.subtitle ? <p className={errorClass}>{errors.subtitle}</p> : null}
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            项目分类
            <select
              value={values.category}
              onChange={(event) => updateValue("category", event.target.value)}
              className={inputClass}
            >
              <option value="">请选择分类</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category ? (
              <p className={errorClass}>{errors.category}</p>
            ) : null}
          </label>

          <label className={labelClass}>
            项目状态
            <select
              value={values.status}
              onChange={(event) => updateValue("status", event.target.value)}
              className={inputClass}
            >
              <option value="">请选择状态</option>
              {statusOptions.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
            {errors.status ? <p className={errorClass}>{errors.status}</p> : null}
          </label>
        </div>

        <label className={labelClass}>
          标签
          <input
            value={values.tags}
            onChange={(event) => updateValue("tags", event.target.value)}
            className={inputClass}
            placeholder="例如：背单词, 学习打卡, 大学生"
          />
        </label>

        <label className={labelClass}>
          演示链接
          <input
            value={values.demoUrl}
            onChange={(event) => updateValue("demoUrl", event.target.value)}
            className={inputClass}
            placeholder="作品体验链接、视频链接或 GitHub 链接"
          />
        </label>

        <label className={labelClass}>
          适合人群
          <textarea
            value={values.targetUsers}
            onChange={(event) => updateValue("targetUsers", event.target.value)}
            className={`${inputClass} min-h-28 resize-y`}
            placeholder="例如：大学生、英语学习者、备考四六级的人"
          />
          {errors.targetUsers ? (
            <p className={errorClass}>{errors.targetUsers}</p>
          ) : null}
        </label>

        <label className={labelClass}>
          核心功能
          <textarea
            value={values.features}
            onChange={(event) => updateValue("features", event.target.value)}
            className={`${inputClass} min-h-32 resize-y`}
            placeholder={"每行写一个功能，例如：\n每日单词计划\n复习提醒\n学习进度统计"}
          />
          {errors.features ? <p className={errorClass}>{errors.features}</p> : null}
        </label>

        <label className={labelClass}>
          项目详细介绍
          <textarea
            value={values.description}
            onChange={(event) => updateValue("description", event.target.value)}
            className={`${inputClass} min-h-36 resize-y`}
            placeholder="介绍这个项目的用途、使用方式、为什么做它"
          />
          {errors.description ? (
            <p className={errorClass}>{errors.description}</p>
          ) : null}
        </label>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            开发者昵称
            <input
              value={values.developerName}
              onChange={(event) =>
                updateValue("developerName", event.target.value)
              }
              className={inputClass}
              placeholder="例如：阿祈同学"
            />
            {errors.developerName ? (
              <p className={errorClass}>{errors.developerName}</p>
            ) : null}
          </label>

          <label className={labelClass}>
            联系方式
            <input
              value={values.contact}
              onChange={(event) => updateValue("contact", event.target.value)}
              className={inputClass}
              placeholder="微信、邮箱、B站/抖音主页链接等"
            />
            {errors.contact ? <p className={errorClass}>{errors.contact}</p> : null}
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-95"
      >
        提交作品
      </button>
    </form>
  );
}
