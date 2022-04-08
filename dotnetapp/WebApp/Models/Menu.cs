using System.ComponentModel.DataAnnotations;

namespace WebApp.Models
{
    public class Menu
    {
        [Key]
        public int foodMenuId { get; set; }
        public string foodMenuImageURL { get; set; } = string.Empty;
        public string foodMenuType { get; set; } = string.Empty;
        public string foodMenuItems { get; set; } = string.Empty;
        public long foodMenuCost { get; set; }
    }
}
