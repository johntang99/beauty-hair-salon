# 🔄 Git Workflow - Future Updates

## 📝 **Simple 3-Step Process**

Whenever you make changes to your site, follow these steps:

---

## ✅ **Step 1: Check What Changed**

```bash
cd /Users/johntang/Desktop/clients/beauty-hair-salon
git status
```

This shows you:
- Which files you modified (red)
- Which files are ready to commit (green)

---

## ✅ **Step 2: Add & Commit Changes**

```bash
# Add all changed files
git add .

# Commit with a message describing your changes
git commit -m "Your message here"
```

**Good commit message examples:**
```bash
git commit -m "Update: Added new team member photos"
git commit -m "Fix: Corrected pricing on services page"
git commit -m "Feature: Added new bridal package"
git commit -m "Update: Changed hero image"
```

---

## ✅ **Step 3: Push to GitHub**

```bash
git push
```

**That's it!** Your changes are now:
- ✅ On GitHub
- ✅ Auto-deploying to Vercel (if connected)
- ✅ Will be live in ~2 minutes

---

## 🎯 **Complete Workflow Example**

### **Scenario: You updated some photos**

```bash
# 1. Check what changed
git status

# 2. Add all changes
git add .

# 3. Commit with message
git commit -m "Update: Replaced team member photos"

# 4. Push to GitHub
git push
```

**Done!** Changes are pushed and auto-deployed! ✨

---

## 🔄 **Common Workflows**

### **Updating Content:**
```bash
# You edit files in VS Code/Cursor
# ...

git add .
git commit -m "Update: Changed service descriptions"
git push
```

### **Adding New Features:**
```bash
# You add new components or pages
# ...

git add .
git commit -m "Feature: Added online payment"
git push
```

### **Fixing Bugs:**
```bash
# You fix an issue
# ...

git add .
git commit -m "Fix: Corrected broken link on contact page"
git push
```

---

## 💡 **Pro Tips**

### **Tip 1: Commit Often**
```bash
# Small, frequent commits are better than large ones
git commit -m "Update pricing"
git commit -m "Add new testimonial"
git commit -m "Fix typo in about page"
```

### **Tip 2: Descriptive Messages**
```bash
# ✅ Good:
git commit -m "Update: Added 3 new services to pricing page"

# ❌ Bad:
git commit -m "changes"
git commit -m "stuff"
git commit -m "update"
```

### **Tip 3: Check Before Pushing**
```bash
# See what will be committed
git status

# See your recent commits
git log --oneline -5
```

---

## 🚫 **Common Mistakes to Avoid**

### **Mistake 1: Forgetting to Add**
```bash
# ❌ Wrong:
git commit -m "Update"  # Nothing happens!

# ✅ Correct:
git add .
git commit -m "Update"
```

### **Mistake 2: Not Committing**
```bash
# ❌ Wrong:
git add .
git push  # Pushes old commits, not your changes!

# ✅ Correct:
git add .
git commit -m "Update"
git push
```

---

## 🔍 **Useful Commands**

### **Check Status:**
```bash
git status              # What changed?
git diff                # Show changes in detail
git log --oneline -10   # Last 10 commits
```

### **Undo Changes** (if needed):
```bash
# Undo uncommitted changes to a file
git checkout -- filename.tsx

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo add (unstage)
git reset
```

### **Pull Latest** (if working with team):
```bash
git pull                # Get latest from GitHub
```

---

## ⚡ **Quick Reference Card**

### **Every Time You Make Changes:**

```
1. Make changes in your code
   ↓
2. git add .
   ↓
3. git commit -m "Description"
   ↓
4. git push
   ↓
5. ✅ Live on Vercel in 2 min!
```

### **One-Liner** (if you're in a hurry):
```bash
git add . && git commit -m "Quick update" && git push
```

---

## 🎨 **Real Examples from Your Project**

### **Example 1: Change a Photo**
```bash
# You update a photo URL in page-creative-content.tsx

git add .
git commit -m "Update: Changed hero overlapping circle photo"
git push

# ✅ New photo live on site in 2 minutes!
```

### **Example 2: Edit Service Info**
```bash
# You update pricing or description in lib/services.ts

git add .
git commit -m "Update: Adjusted pricing for hair coloring service"
git push

# ✅ New pricing live immediately!
```

### **Example 3: Add Team Member**
```bash
# You add a new person to lib/team.ts

git add .
git commit -m "Feature: Added new senior stylist to team"
git push

# ✅ New team member appears on site!
```

---

## 📊 **Your Workflow Summary**

**Current Status:**
- ✅ Code on GitHub: `github.com/johntang99/beauty-hair-salon`
- ✅ Auto-deploys to Vercel (when connected)
- ✅ All 132 files committed
- ✅ Ready for updates

**Future Workflow:**
```
Edit files → git add . → git commit -m "..." → git push → Auto-deploy ✨
```

---

## 🎊 **That's It!**

**The simple workflow:**
```bash
git add .
git commit -m "What you changed"
git push
```

**Remember these 3 commands and you're good to go!** 🚀

---

## 💡 **Bonus: Aliases** (Make it even easier!)

Add to your `~/.zshrc` or `~/.bashrc`:

```bash
# Git shortcuts
alias gs='git status'
alias ga='git add .'
alias gc='git commit -m'
alias gp='git push'
alias gl='git log --oneline -10'
```

Then you can just type:
```bash
ga
gc "Update photos"
gp
```

**Super fast!** ⚡

---

**Save this file for reference whenever you need to push updates!** 📚✨
