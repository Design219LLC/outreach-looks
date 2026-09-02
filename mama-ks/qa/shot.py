from pathlib import Path
from playwright.sync_api import sync_playwright

QA = Path("/workspace/looks/mama-ks/qa")
QA.mkdir(parents=True, exist_ok=True)
MK = Path("/workspace/looks/mama-ks/index.html").as_uri()
MV = Path("/workspace/looks/mama-ks/visit.html").as_uri()
LB = Path("/workspace/outreach-looks-publish/lady-birds-site/index.html").as_uri()

sizes = {
    "390": {"width": 390, "height": 844},
    "768": {"width": 768, "height": 1024},
    "desktop": {"width": 1280, "height": 900},
}

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for name, vp in sizes.items():
        page = browser.new_page(viewport=vp, device_scale_factor=2)
        page.goto(MK, wait_until="networkidle", timeout=60000)
        page.wait_for_timeout(800)
        page.screenshot(path=str(QA / f"mk-{name}.png"), full_page=False)
        page.close()
        page = browser.new_page(viewport=vp, device_scale_factor=2)
        page.goto(LB, wait_until="networkidle", timeout=60000)
        page.wait_for_timeout(800)
        page.screenshot(path=str(QA / f"lb-{name}.png"), full_page=False)
        page.close()
    page = browser.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=2)
    page.goto(MV, wait_until="networkidle", timeout=60000)
    page.wait_for_timeout(600)
    page.screenshot(path=str(QA / "mk-visit-390.png"), full_page=False)
    page.close()
    browser.close()
print("shots ok")
