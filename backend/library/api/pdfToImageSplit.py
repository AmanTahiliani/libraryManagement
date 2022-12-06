import pypdfium2 as pdfium
import os
import shutil


def pdfToImageConvert(pdfPath):
    pdf = pdfium.PdfDocument(pdfPath)

    try:
        pdf_name = pdfPath.split("/")[-1].split(".")[0]
    except:
        pdf_name = pdfPath

    page_count = len(pdf)

    for page_number in range(page_count):
        page = pdf.get_page(page_number)
        pil_image = page.render_topil(
            scale=1,
            rotation=0,
            crop=(0, 0, 0, 0),
            fill_colour=(255, 255, 255, 255),
            draw_annots=True,
            greyscale=True,
            optimise_mode=pdfium.OptimiseMode.NONE,
        )
        pil_image.save(f"image_{pdf_name}_{page_number+1}.png")
        if not os.path.exists(f"../mediafiles/pdfImages/image_{pdf_name}"):
            os.makedirs(f"../mediafiles/pdfImages/image_{pdf_name}")
        if not os.path.exists(
            f"../mediafiles/pdfImages/image_{pdf_name}/image_{pdf_name}_{page_number+1}.png"
        ):
            shutil.move(
                f"image_{pdf_name}_{page_number+1}.png",
                f"../mediafiles/pdfImages/image_{pdf_name}",
            )
        else:
            os.remove(f"image_{pdf_name}_{page_number+1}.png")
