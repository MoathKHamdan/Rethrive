#!/bin/bash

# ReThrive Asset Download Script
# This script downloads all external images from the React app for WordPress migration

echo "🚀 Starting ReThrive asset download..."
echo ""

# Create directory structure
echo "📁 Creating directory structure..."
mkdir -p wordpress-assets/images/{experts,ecosystem,testimonials,case-studies,blog,clinicians,model,philosophy}

# Function to download with retry
download_file() {
    local url=$1
    local output=$2
    local max_attempts=3
    local attempt=1

    while [ $attempt -le $max_attempts ]; do
        echo "  Downloading: $(basename $output) (attempt $attempt/$max_attempts)"
        if curl -f -L -o "$output" "$url" 2>/dev/null; then
            echo "  ✅ Success: $(basename $output)"
            return 0
        fi
        attempt=$((attempt + 1))
        sleep 1
    done
    
    echo "  ❌ Failed: $(basename $output)"
    return 1
}

# Download Logo
echo ""
echo "📷 Downloading logo..."
download_file "https://iili.io/qHfdUsj.png" "wordpress-assets/images/logo.png"

# Download Expert Photos
echo ""
echo "👨‍⚕️ Downloading expert photos..."
download_file "https://iili.io/qHfxdP9.png" "wordpress-assets/images/experts/sarah-chen.png"
download_file "https://iili.io/qHfz41t.png" "wordpress-assets/images/experts/michael-rodriguez.png"
download_file "https://iili.io/qHfOJpa.jpg" "wordpress-assets/images/experts/emily-watson.jpg"
download_file "https://iili.io/qHfoTvf.png" "wordpress-assets/images/experts/david-kim.png"
download_file "https://iili.io/qHfk3fp.jpg" "wordpress-assets/images/experts/lisa-anderson.jpg"

# Download Ecosystem Images
echo ""
echo "🖥️ Downloading ecosystem images..."
download_file "https://iili.io/qHfB13J.png" "wordpress-assets/images/ecosystem/patient-dashboard.png"
download_file "https://iili.io/qHfXgRf.png" "wordpress-assets/images/ecosystem/referral-portal.png"

# Download Model Page Image
echo ""
echo "💼 Downloading model page image..."
download_file "https://iili.io/qHfuh1S.png" "wordpress-assets/images/model/consultation.png"

# Download Testimonial Photos
echo ""
echo "💬 Downloading testimonial photos..."
download_file "https://images.unsplash.com/photo-1620213391117-0d169a917221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZlbWFsZSUyMGF0aGxldGUlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzA5NDY0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080" "wordpress-assets/images/testimonials/athlete-female.jpg"
download_file "https://images.unsplash.com/photo-1765896387387-0538bc9f997e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwcGF0aWVudCUyMHNtaWxpbmd8ZW58MXx8fHwxNzcwOTQ2NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080" "wordpress-assets/images/testimonials/elderly-patient.jpg"
download_file "https://images.unsplash.com/photo-1731514836024-614e2bab04c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBoeXNpY2FsJTIwdGhlcmFweSUyMHNlc3Npb258ZW58MXx8fHwxNzcwOTQ2NDExfDA&ixlib=rb-4.1.0&q=80&w=1080" "wordpress-assets/images/testimonials/woman-therapy.jpg"
download_file "https://images.unsplash.com/photo-1765896387454-3c29c0473615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjByZWNvdmVyeSUyMHRoZXJhcHl8ZW58MXx8fHwxNzcwOTQ2NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080" "wordpress-assets/images/testimonials/man-recovery.jpg"
download_file "https://freeimage.host/i/qHf5rB4.png" "wordpress-assets/images/testimonials/reshape-background.png"

# Download Case Study Photos
echo ""
echo "📊 Downloading case study photos..."
download_file "https://images.unsplash.com/photo-1675106644038-310da7ca0df6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBtYW4lMjBnb2xmZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzA4NjM4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080" "wordpress-assets/images/case-studies/robert-golfer.jpg"
download_file "https://images.unsplash.com/photo-1496672254107-b07a26403885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjB3b21hbiUyMGdyYW5kbW90aGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwODYzODE2fDA&ixlib=rb-4.1.0&q=80&w=1080" "wordpress-assets/images/case-studies/linda-grandmother.jpg"
download_file "https://images.unsplash.com/photo-1768208718216-5642b5ae9cea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHJ1bm5lciUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwODYzODE2fDA&ixlib=rb-4.1.0&q=80&w=1080" "wordpress-assets/images/case-studies/jennifer-runner.jpg"

# Download Blog Post Images
echo ""
echo "📝 Downloading blog post images..."
download_file "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800" "wordpress-assets/images/blog/patient-care.jpg"
download_file "https://images.unsplash.com/photo-1554224311-beee460c201f?w=800" "wordpress-assets/images/blog/direct-pay-model.jpg"
download_file "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800" "wordpress-assets/images/blog/chronic-pain.jpg"

# Download Clinician Profile Images
echo ""
echo "👩‍⚕️ Downloading clinician profile images..."
download_file "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" "wordpress-assets/images/clinicians/sarah-mitchell.jpg"
download_file "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" "wordpress-assets/images/clinicians/alex-johnson.jpg"
download_file "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" "wordpress-assets/images/clinicians/maria-rodriguez.jpg"

# Download Philosophy Page Image
echo ""
echo "🎯 Downloading philosophy page image..."
download_file "https://images.unsplash.com/photo-1544187702-067d81860901?auto=format&fit=crop&q=80&w=1080" "wordpress-assets/images/philosophy/founder-patient.jpg"

# Summary
echo ""
echo "=========================================="
echo "✅ Download complete!"
echo ""
echo "📁 All assets saved to: wordpress-assets/"
echo ""
echo "Next steps:"
echo "1. Review downloaded images in wordpress-assets/"
echo "2. Upload to WordPress Media Library"
echo "3. Or copy to WordPress theme directory:"
echo "   /wp-content/themes/rethrive/assets/images/"
echo ""
echo "📝 See ASSET_EXPORT_LIST.md for detailed mapping"
echo "=========================================="
