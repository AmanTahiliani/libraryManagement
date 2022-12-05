from PyPDF2 import PdfFileReader, PdfFileWriter


def searchInBook(fileLocation, quote):
    filepath = fileLocation
    searchKeywords = quote

    pdf = PdfFileReader(filepath)
    book = dict()

    for pageNumber in range(pdf.numPages):
        pageObj = pdf.getPage(pageNumber)

        try:
            txt = pageObj.extractText()
            book[pageNumber] = txt
            if searchKeywords.lower() in txt.lower():
                return (True, pageNumber)
        except:
            print("Could not Extract Information from page {0}".format(pageNumber))
    return (False, 0)
