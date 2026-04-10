<form action="https://formspree.io/f/mojpozye" method="POST" className="space-y-6">

  {/* Name */}
  <div className="space-y-2">
    <Label htmlFor="name">Name *</Label>
    <Input
      id="name"
      name="name"
      placeholder="Your name"
      required
      value={formData.name}
      onChange={(e) =>
        setFormData({ ...formData, name: e.target.value })
      }
    />
  </div>

  {/* Email */}
  <div className="space-y-2">
    <Label htmlFor="email">Email *</Label>
    <Input
      id="email"
      name="email"
      type="email"
      placeholder="your@email.com"
      required
      value={formData.email}
      onChange={(e) =>
        setFormData({ ...formData, email: e.target.value })
      }
    />
  </div>

  {/* Phone */}
  <div className="space-y-2">
    <Label htmlFor="phone">Phone Number *</Label>
    <Input
      id="phone"
      name="phone"
      type="tel"
      placeholder="+91 98765 43210"
      required
      value={formData.phone}
      onChange={(e) =>
        setFormData({ ...formData, phone: e.target.value })
      }
    />
  </div>

  {/* Service */}
  <div className="space-y-2">
    <Label>Service Category *</Label>
    <Select
      value={formData.service}
      onValueChange={(value) =>
        setFormData({ ...formData, service: value })
      }
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a service" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="portrait">Portrait Photography</SelectItem>
        <SelectItem value="event">Event Coverage</SelectItem>
        <SelectItem value="lifestyle">Lifestyle Sessions</SelectItem>
      </SelectContent>
    </Select>

    {/* Hidden input (IMPORTANT) */}
    <input type="hidden" name="service" value={formData.service} />
  </div>

  {/* Location */}
  <div className="space-y-2">
    <Label>Location Type *</Label>
    <Select
      value={formData.location}
      onValueChange={(value) =>
        setFormData({ ...formData, location: value })
      }
    >
      <SelectTrigger>
        <SelectValue placeholder="Select location" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="kolkata">Within Kolkata</SelectItem>
        <SelectItem value="outside">Outside Kolkata</SelectItem>
      </SelectContent>
    </Select>

    {/* Hidden input */}
    <input type="hidden" name="location" value={formData.location} />
  </div>

  {/* Details */}
  <div className="space-y-2">
    <Label htmlFor="details">Additional Details</Label>
    <Textarea
      id="details"
      name="details"
      placeholder="Tell us more about your project..."
      rows={4}
      value={formData.details}
      onChange={(e) =>
        setFormData({ ...formData, details: e.target.value })
      }
    />
  </div>

  <Button type="submit" className="w-full" size="lg">
    Book Now
  </Button>
</form>
