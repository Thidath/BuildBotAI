import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

// Extend jsPDF to support lastAutoTable
declare module "jspdf" {
  interface jsPDF {
    lastAutoTable?: {
      finalY?: number
    }
  }
}

export function generateBuildPDF(build: any) {
  const doc = new jsPDF()

  // Set PDF meta
  doc.setProperties({
    title: "BuildBotAI PC Build Quotation",
    subject: "Quotation for custom PC build",
    author: "BuildBotAI",
  })

  // Title
  doc.setFont("helvetica", "bold")
  doc.setFontSize(20)
  doc.setTextColor(51, 102, 204) // Stylish blue
  doc.text("BuildBotAI — PC Build Quotation", 105, 20, { align: "center" })

  // Build Info Table
  autoTable(doc, {
    startY: 30,
    head: [["Component", "Specification"]],
    body: [
      ["CPU", build.cpu],
      ["GPU", build.gpu],
      ["RAM", build.ram],
      ["Motherboard", build.motherboard],
    ],
    theme: "grid",
    headStyles: {
      fillColor: [33, 150, 243],
      textColor: 255,
      fontStyle: "bold",
    },
    bodyStyles: {
      textColor: 30,
      fontSize: 12,
    },
    alternateRowStyles: { fillColor: [245, 245, 245] },
  })

  const finalY = doc.lastAutoTable?.finalY || 60

  // Total Cost
  doc.setFontSize(14)
  doc.setTextColor(0, 153, 76) // green
  doc.setFont("helvetica", "bold")
  doc.text(` Total Cost: $${build.total_cost}`, 14, finalY + 15)

  // Timestamp
  doc.setFontSize(10)
  doc.setTextColor(100)
  doc.setFont("helvetica", "normal")
  doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, finalY + 25)

  // Save the file
  doc.save(`BuildBotAI_Quotation_${Date.now()}.pdf`)
}