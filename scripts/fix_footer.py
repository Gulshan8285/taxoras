with open("src/components/layout/Footer.tsx", "r") as f:
    content = f.read()

# Replace new Date().getFullYear() with 2026 and add "use client"; at the top
fixed = '"use client";\n\n' + content.replace("{new Date().getFullYear()}", "2026")
with open("src/components/layout/Footer.tsx", "w") as f:
    f.write(fixed)

print("Updated Footer.tsx")
