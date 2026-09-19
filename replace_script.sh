for file in src/pages/AaharPage.tsx src/pages/CategoryListing.tsx src/pages/GalleryPage.tsx src/pages/JapMalaPage.tsx src/pages/MuniPage.tsx src/pages/MuniProfilesPage.tsx src/pages/NiyamaPage.tsx src/pages/Panchang.tsx src/pages/ParvaPage.tsx src/pages/PathshalaPage.tsx src/pages/PujaPage.tsx src/pages/TattvaPage.tsx src/pages/TirthPage.tsx src/pages/TirthankarProfile.tsx src/pages/TrikalTirthankarPage.tsx; do
  sed -i 's/title="वापस जाएं"/title="वापस जाएं" aria-label="वापस जाएं"/g' "$file"
done
