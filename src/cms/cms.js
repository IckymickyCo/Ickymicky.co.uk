import CMS from 'netlify-cms-app'

import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import ProductListPagePreview from './preview-templates/ProductListPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

const config = {}
// Important to remove your backend config and replace it in this setup
if (process.env.NODE_ENV === 'development') {
    const FileSystemBackend = require('netlify-cms-backend-fs');
    config.backend = {
        "name": "file-system",
        "api_root": "/api"
    }
    config.display_url = "http://localhost:8000"
    CMS.registerBackend('file-system', FileSystemBackend)
} else {
    config.backend = {
        "backend": {
            "name": "github",
            "repo": " IckymickyCo/Ickymicky.co.uk",
            "branch": "master",
            "commit_messages": {
                "create": 'Create {{collection}} “{{slug}}”',
                "update": 'Update {{collection}} “{{slug}}”',
                "delete": 'Delete {{collection}} “{{slug}}”',
                "uploadMedia": '[skip ci] Upload “{{path}}”',
                "deleteMedia": '[skip ci] Delete “{{path}}”'
            }
        }
    }
}

CMS.init({ config })

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('product-list', ProductListPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
