using System.ComponentModel.DataAnnotations;

namespace WebApp.Models

{
    public class Theme
    {
        [Key]
        public int themeId { get; set; }
        public string themeName { get; set; } = string.Empty;
        public string themeImageURL { get; set; } = string.Empty;
        public string themeAddress { get; set; } = string.Empty;
        public string themeDescription { get; set; } = string.Empty;
        public string themePhotographer { get; set; } = string.Empty;
        public string themeVideographer { get; set; } = string.Empty;
        public string themeReturnGift { get; set; } = string.Empty;
        public long themeCost { get; set; }
    }
}
