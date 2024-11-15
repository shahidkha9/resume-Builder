'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { usePDF } from 'react-to-pdf'

type ResumeData = {
  name: string
  email: string
  phone: string
  address: string
  summary: string
  experience: string
  education: string
  skills: string
}

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: '',
    education: '',
    skills: ''
  })

  const { toPDF, targetRef } = usePDF({ filename: 'resume.pdf' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setResumeData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-orange-500 font-bold mb-6 text-center">Resume Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <Card className="bg-slate-50 shadow-lg">
          <CardHeader>
            <CardTitle>Resume Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4 p-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={resumeData.name} onChange={handleInputChange} className="border-orange-500" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={resumeData.email} onChange={handleInputChange} className="border-orange-500" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" value={resumeData.phone} onChange={handleInputChange} className="border-orange-500" />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" name="address" value={resumeData.address} onChange={handleInputChange} className="border-orange-500" />
              </div>
              <div>
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea id="summary" name="summary" value={resumeData.summary} onChange={handleInputChange} className="border-orange-500" />
              </div>
              <div>
                <Label htmlFor="experience">Work Experience</Label>
                <Textarea id="experience" name="experience" value={resumeData.experience} onChange={handleInputChange} className="border-orange-500" />
              </div>
              <div>
                <Label htmlFor="education">Education</Label>
                <Textarea id="education" name="education" value={resumeData.education} onChange={handleInputChange} className="border-orange-500" />
              </div>
              <div>
                <Label htmlFor="skills">Skills</Label>
                <Textarea id="skills" name="skills" value={resumeData.skills} onChange={handleInputChange} className="border-orange-500" />
              </div>
            </form>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle>Resume Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              ref={targetRef}
              className="space-y-6 p-6 bg-white rounded-lg shadow-md border border-gray-200 text-center text-gray-800"
            >
              <h2 className="text-3xl font-bold text-orange-500">{resumeData.name}</h2>
              <p className="text-gray-600">{resumeData.email} | {resumeData.phone}</p>
              <p className="text-gray-600">{resumeData.address}</p>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-600">Professional Summary</h3>
                <p className="mt-2 text-gray-700">{resumeData.summary}</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-600">Work Experience</h3>
                <p className="mt-2 text-gray-700">{resumeData.experience}</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-600">Education</h3>
                <p className="mt-2 text-gray-700">{resumeData.education}</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-600">Skills</h3>
                <p className="mt-2 text-gray-700">{resumeData.skills}</p>
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" onClick={() => toPDF()}>
              Download PDF
            </Button>
          </CardFooter>
        </Card>

      </div>
    </div>
  )
}
