"use client"
import { useState } from "react";

export default function Home() {
  const [patient,setPatient]=useState({name:"",file_id:"",dob:"",gender:"",hypnosis:"",donte:"",history:"",medicen:"",exitDate:"",exitTime:""})
  return (
    <form>
    <div className="container mx-auto p-[16px]">
      <div className="flex justify-start">
        <img className="w-[82px]" src="/logo.png" />
      </div>
      <div className="mx-auto ">
        <img className="mx-auto pt-[16px]" src="/headerimage.png" />
      </div>
      <div className="justify-start">
        <label className="mb-[8px]">الاسم المريض:</label>
        <input
        required
          className="border h-[48px]  bg-slate-100 w-full p-[4px] rounded"
          placeholder="اسم المريض"
        />
      </div>
      <div className="justify-start mt-[16px]">
        <label className="mb-[8px]">رقم الملف:</label>
        <input
        required
          type="number"
          className="border h-[48px]  bg-slate-100 w-full p-[4px] rounded"
          placeholder="رقم الملف"
        />
      </div>
      <div className="justify-start mt-[16px]">
        <label className="mb-[8px]">تاريخ الميلاد:</label>
        <input
          className="border h-[48px]  bg-slate-100 w-full p-[4px] rounded"
          placeholder="تاريخ الميلاد"
          type="date"
        />
      </div>
      <div className="justify-start mt-[16px]">
        <label className="mb-[8px]">الجنس:</label>
        <div className="flex justify-between gap-[16px]">
          <button type="button" onClick={()=>{setPatient(prev=>({...prev,gender:'male'}))}} className={`border h-[40px] ${patient.gender=='male'?"bg-[#74ABE2] text-white font-bold":"bg-slate-100 text-slate-400"} rounded p-[8px] w-full  `}>
            ذكر
          </button>
          <button type="button" onClick={()=>{setPatient(prev=>({...prev,gender:'female'}))}} className={`border h-[40px] ${patient.gender=='female'?"bg-[#E274CE] text-white font-bold":"bg-slate-100 text-slate-400"} rounded p-[8px] w-full `}>
            انثى
          </button>
        </div>
      </div>
      <div className="justify-start mt-[16px]">
        <label className="mb-[8px]">سبب التنويم:</label>
        <select
        required
          className="border h-[48px]  bg-slate-100 w-full p-[4px] rounded"
          placeholder="سبب التنويم"
          type="date"
        >
          <option value="">سبب التنويم</option>
          <option>جراحة</option>
          <option>مرض معدي</option>
          <option>مرض غير معدي</option>
          <option>طوارئ</option>
        </select>
      </div>
      <div className="justify-start mt-[16px]">
        <label className="mb-[8px]">ملاحظات الطبيب المسؤول:</label>
        <textarea
          className="border h-[96px]  bg-slate-100 w-full p-[4px] rounded"
          placeholder="ملاحظات الطبيب المسؤول"
        />
      </div>
      <div className="justify-start mt-[16px]">
        <label className="mb-[8px]">التاريخ المرضي:</label>
        <textarea
          className="border h-[96px]  bg-slate-100 w-full p-[4px] rounded"
          placeholder="التاريخ المرضي"
        />
      </div>
      <div className=" mt-[16px]">
        <label className="mb-[8px] w-full">أدوية يتناولها المريض:</label>
        <br />
        <small className="w-full text-slate-500">(فترة ٦ اشهر سابقة)</small>
        <textarea
          className="border h-[96px]  bg-slate-100 w-full p-[4px] rounded"
          placeholder="أدوية يتناولها المريض"
        />
      </div>
      <div className="justify-start mt-[16px]">
        <label className="mb-[8px]">تاريخ الخروج:</label>
        <div className="flex justify-between gap-[16px]">
        <input
          className="border h-[48px]  bg-slate-100 w-full p-[4px] rounded"
          placeholder="تاريخ الخروج"
          type="date"
        />
        <input
          className="border h-[48px]  bg-slate-100 w-full p-[4px] rounded"
          placeholder="تاريخ الخروج"
          type="time"
        />
        </div>
      </div>
      <div className="flex justify-center mt-[32px]">
        <button className="bg-[#488CD0] text-white p-[8px] w-full max-w-[300px] rounded font-bold"> تسجيل</button>
        </div>
        
    </div>
    </form>
  );
}
